package org.volcampanion.api;


import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.domain.mappers.ConferenceMapper;
import org.volcampanion.dto.ConferenceDTO;
import org.volcampanion.dto.CreateConferenceDTO;
import org.volcampanion.exception.NotFoundException;
import org.volcampanion.service.ConferenceService;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/conferences")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Conferences API")
public class ConferenceController {

    @Inject
    ConferenceService service;

    @Inject
    ConferenceMapper mapper;

    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ConferenceDTO[].class)
            )
    )
    public List<ConferenceDTO> list() {
        return mapper.toDTO(service.list());
    }


    @GET
    @Path("/{id}")
    @APIResponse(responseCode = "404", description = "Conference not found")
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ConferenceDTO.class)
            )
    )
    public ConferenceDTO getById(@PathParam("id") Long id) {
        var conf = service.findById(id);
        if (conf == null) {
            throw new NotFoundException();
        }
        return mapper.toDTO(conf);
    }

    @GET
    @Path("/active")
    @APIResponse(responseCode = "404", description = "Conference not found")
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ConferenceDTO.class)
            )
    )
    public ConferenceDTO getCurrentActiveConference() {
        var conf = service.findActive();
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
    public ConferenceDTO create(CreateConferenceDTO dto) {
        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
    }

    @PUT
    @Transactional
    public ConferenceDTO update(CreateConferenceDTO dto) {
        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
    }


}
