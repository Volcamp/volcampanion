package org.volcampanion.api;


import java.util.List;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.api.validator.IdentifiableValidator;
import org.volcampanion.domain.SpeakerFilters;
import org.volcampanion.domain.mappers.SpeakerMapper;
import org.volcampanion.dto.CreateSpeakerDTO;
import org.volcampanion.dto.SpeakerDTO;
import org.volcampanion.exception.NotFoundException;
import org.volcampanion.exception.dto.ErrorDTO;
import org.volcampanion.service.ConferenceService;
import org.volcampanion.service.SpeakerService;

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

    @Inject
    IdentifiableValidator identifiableValidator;

    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = SpeakerDTO[].class)
            )
    )
    @Tag(name = "Speakers API")
    public List<SpeakerDTO> list(@QueryParam("idConf") Long idConf) {
        return mapper.toDTO(service.listWithFilters(
                new SpeakerFilters()
                        .setConferenceId(idConf)
        ));
    }


    @GET
    @Path("/{id}")
    @APIResponse(responseCode = "404", description = "Speaker not found")
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = SpeakerDTO.class)
            )
    )
    @Tag(name = "Speakers API")
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
        var conf = identifiableValidator.validate(dto.getConference(),
                "conference->id",
                aLong -> conferenceService.findById(aLong));

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
        var conf = identifiableValidator.validate(dto.getConference(),
                "conference->id",
                aLong -> conferenceService.findById(aLong));
        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto).setConference(conf)));
    }

}
