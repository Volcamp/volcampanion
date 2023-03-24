package org.volcampanion.api;


import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.domain.Conference;
import org.volcampanion.domain.mappers.SpeakerMapper;
import org.volcampanion.dto.CreateSpeakerDTO;
import org.volcampanion.dto.SpeakerDTO;
import org.volcampanion.exception.BadRequestException;
import org.volcampanion.exception.MandatoryParameterException;
import org.volcampanion.exception.NotFoundException;
import org.volcampanion.exception.dto.ErrorDTO;
import org.volcampanion.service.ConferenceService;
import org.volcampanion.service.SpeakerService;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Objects;

@Path("/speakers")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Speakers API")
public class SpeakerController {

    @Inject
    SpeakerService service;

    @Inject
    ConferenceService conferenceService;

    @Inject
    SpeakerMapper mapper;

    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = SpeakerDTO[].class)
            )
    )
    public List<SpeakerDTO> list() {
        return mapper.toDTO(service.list());
    }


    @GET
    @Path("/{id}")
    @APIResponse(responseCode = "404", description = "Speaker not found")
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = SpeakerDTO.class)
            )
    )
    public SpeakerDTO getById(@PathParam("id") Long id) {
        var conf = service.findById(id);
        if (conf == null) {
            throw new NotFoundException();
        }
        return mapper.toDTO(conf);
    }

    @DELETE
    @Path("/{id}")
    public void delete(@PathParam("id") Long id) {
        service.deleteById(id);
    }

    @POST
    @Transactional
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = SpeakerDTO.class)
            )
    )
    @APIResponse(responseCode = "400", description = "Cannot create speaker",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ErrorDTO.class)
            )
    )
    public SpeakerDTO create(CreateSpeakerDTO dto) {
        Conference conf = validateConference(dto);

        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto).setConference(conf)));
    }

    @PUT
    @Transactional
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = SpeakerDTO.class)
            )
    )
    @APIResponse(responseCode = "400", description = "Cannot update speaker",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ErrorDTO.class)
            )
    )
    public SpeakerDTO update(CreateSpeakerDTO dto) {
        Conference conf = validateConference(dto);
        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto).setConference(conf)));
    }

    private Conference validateConference(CreateSpeakerDTO dto) {
        if (Objects.isNull(dto.getConferenceId())) {
            throw new MandatoryParameterException("conferenceId");
        }

        Conference conf = conferenceService.findById(dto.getConferenceId());
        if (Objects.isNull(conf)) {
            throw new BadRequestException("Conference provided was not found");
        }
        return conf;
    }

}
