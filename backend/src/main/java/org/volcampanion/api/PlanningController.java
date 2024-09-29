package org.volcampanion.api;


import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.domain.Planning;
import org.volcampanion.domain.PlanningFilters;
import org.volcampanion.domain.mappers.PlanningMapper;
import org.volcampanion.dto.CreatePlanningDTO;
import org.volcampanion.dto.PlanningDTO;
import org.volcampanion.dto.RoomDTO;
import org.volcampanion.dto.TalkDTO;
import org.volcampanion.exception.NotFoundException;
import org.volcampanion.service.PlanningService;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import java.util.Collections;
import java.util.List;

import static jakarta.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/plannings")
@Produces(APPLICATION_JSON)
@Consumes(APPLICATION_JSON)
@Tag(name = "Planning API")
public class PlanningController {

    @Inject
    PlanningService service;

    @Inject
    PlanningMapper mapper;

    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = PlanningDTO[].class)
            )
    )
    public List<PlanningDTO> list(@QueryParam("idConf") Long idConf) {
        return mapper.toDTO(service.listWithFilters(
                new PlanningFilters()
                        .setConferenceId(idConf)
        ));
    }


    @GET
    @Path("/room/{room}")
    @APIResponse(responseCode = "200", description = "OK", content = @Content(mediaType = "application/json", schema = @Schema(implementation = PlanningDTO[].class)))
    public List<PlanningDTO> getByRoom(@PathParam("room") Long room) {
        var plannings = service.listByRoom(room);
        if (plannings == null) {
            return Collections.emptyList();
        }
        return mapper.toDTO(plannings);
    }


    @GET
    @Path("/room/{room}/talk/{talk}")
    @APIResponse(responseCode = "404", description = "Plannings not found")
    @APIResponse(responseCode = "200", description = "OK", content = @Content(mediaType = "application/json", schema = @Schema(implementation = PlanningDTO.class)))
    public PlanningDTO getById(@PathParam("room") Long room, @PathParam("talk") Long talk) {
        final PlanningDTO dto = new PlanningDTO().setRoom(new RoomDTO().setId(room))
                .setTalk(new TalkDTO().setId(talk));
        Planning planning = mapper.toDomain(dto);
        planning = service.findById(planning);
        if (planning == null) {
            throw new NotFoundException();
        }
        return mapper.toDTO(planning);
    }

    @GET
    @Path("/talk/{talk}")
    @APIResponse(responseCode = "404", description = "Plannings not found")
    @APIResponse(responseCode = "200", description = "OK", content = @Content(mediaType = "application/json", schema = @Schema(implementation = PlanningDTO.class)))
    public List<PlanningDTO> getByTalk(@PathParam("talk") Long talk) {
        var plannings = service.listByTalk(talk);
        if (plannings == null) {
            throw new NotFoundException();
        }
        return mapper.toDTO(plannings);
    }

//    @DELETE
//    @Path("/room/{room}/talk/{talk}")
//    public void delete(@PathParam("room") Long room, @PathParam("talk") Long talk) {
//        final PlanningDTO dto = new PlanningDTO().setRoom(new RoomDTO().setId(room))
//                .setTalk(new TalkDTO().setId(talk));
//        final Planning planning = mapper.toDomain(dto);
//        service.delete(planning);
//    }
//
//    @POST
//    @Transactional
//    public PlanningDTO create(CreatePlanningDTO dto) {
//        //TODO handle input id verif
//        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
//    }
//
//    @PUT
//    @Transactional
//    public PlanningDTO update(CreatePlanningDTO dto) {
//        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
//    }


}
