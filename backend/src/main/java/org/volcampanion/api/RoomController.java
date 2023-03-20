package org.volcampanion.api;


import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.domain.mappers.RoomMapper;
import org.volcampanion.dto.CreateRoomDTO;
import org.volcampanion.dto.RoomDTO;
import org.volcampanion.service.ConferenceService;
import org.volcampanion.service.RoomService;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Objects;

@Path("/rooms")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Rooms API")
public class RoomController {

    @Inject
    RoomService service;

    @Inject
    ConferenceService conferenceService;

    @Inject
    RoomMapper mapper;

    @GET
    @APIResponse(responseCode = "404", description = "Room not found")
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = RoomDTO[].class)
            )
    )
    public List<RoomDTO> list() {
        return mapper.toDTO(service.list());
    }


    @GET
    @Path("/{id}")
    @APIResponse(responseCode = "404", description = "Room not found")
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = RoomDTO.class)
            )
    )
    public RoomDTO getById(@PathParam("id") Long id) {
        var room = service.findById(id);
        if (room == null) {
            throw new NotFoundException();
        }
        return mapper.toDTO(room);
    }


    @DELETE
    @Path("/{id}")
    @RolesAllowed(Constants.ADMIN_ROLE)
    public void delete(@PathParam("id") Long id) {
        service.deleteById(id);
    }

    @POST
    @Transactional
    @RolesAllowed(Constants.ADMIN_ROLE)
    public CreateRoomDTO create(CreateRoomDTO dto) {
        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
    }

    @PUT
    @Transactional
    @RolesAllowed(Constants.ADMIN_ROLE)
    public RoomDTO update(CreateRoomDTO dto) {
        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
    }

    @POST
    @Transactional
    @Path("/{roomId}/conference/{confId}")
    @RolesAllowed(Constants.ADMIN_ROLE)
    public RoomDTO associateToConference(@PathParam("roomId") Long roomId, @PathParam("confId") Long confId) {
        var room = service.findById(roomId);
        if (room == null) {
            return null;
        }
        var conference = conferenceService.findById(confId);
        room.setConference(conference);
        return mapper.toDTO(service.createOrUpdate(room));
    }

    @DELETE
    @Transactional
    @Path("/{roomId}/conference/{confId}")
    @RolesAllowed(Constants.ADMIN_ROLE)
    public RoomDTO dissociateFromConference(@PathParam("roomId") Long roomId, @PathParam("confId") Long confId) {
        var room = service.findById(roomId);
        if (room == null) {
            return null;
        }
        if (room.getConference() != null && !Objects.equals(room.getConference().getId(), confId)) {
            throw new UnsupportedOperationException("The current room is already associated with another conference.");
        }
        room.setConference(null);
        return mapper.toDTO(service.createOrUpdate(room));
    }

}
