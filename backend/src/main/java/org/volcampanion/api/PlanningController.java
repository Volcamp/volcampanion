package org.volcampanion.api;


import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import java.util.List;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.domain.Planning;
import org.volcampanion.domain.mappers.PlanningMapper;
import org.volcampanion.dto.PlanningDTO;
import org.volcampanion.exception.NotFoundException;
import org.volcampanion.service.PlanningService;

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
  public List<PlanningDTO> list() {
    return mapper.toDTO(service.list());
  }


  @GET
  @Path("/room/{room}/")
  @APIResponse(responseCode = "404", description = "Plannings not found")
  @APIResponse(responseCode = "200", description = "OK",
      content = @Content(mediaType = "application/json",
          schema = @Schema(implementation = PlanningDTO[].class)
      )
  )
  public List<PlanningDTO> getByRoom(@PathParam("room") Long room) {
    var plannings = service.listByRoom(room);
    if (plannings == null) {
      throw new NotFoundException();
    }
    return mapper.toDTO(plannings);
  }

  @GET
  @Path("/room/{room}/talk/{talk}")
  @APIResponse(responseCode = "404", description = "Plannings not found")
  @APIResponse(responseCode = "200", description = "OK",
      content = @Content(mediaType = "application/json",
          schema = @Schema(implementation = PlanningDTO.class)
      )
  )
  public PlanningDTO getById(@PathParam("room") Long room, @PathParam("talk") Long talk) {
    final PlanningDTO dto = new PlanningDTO()
        .setRoom(room)
        .setTalk(talk);
    Planning planning = mapper.toDomain(dto);
    planning = service.findById(planning);
    if (planning == null) {
      throw new NotFoundException();
    }
    return mapper.toDTO(planning);
  }

  @GET
  @Path("/talk/{talk}/")
  @APIResponse(responseCode = "404", description = "Plannings not found")
  @APIResponse(responseCode = "200", description = "OK",
      content = @Content(mediaType = "application/json",
          schema = @Schema(implementation = PlanningDTO.class)
      )
  )
  public List<PlanningDTO> getByTalk(@PathParam("talk") Long talk) {
    var plannings = service.listByTalk(talk);
    if (plannings == null) {
      throw new NotFoundException();
    }
    return mapper.toDTO(plannings);
  }

  @DELETE
  @Path("/room/{room}/talk/{talk}")
  public void delete(@PathParam("room") Long room, @PathParam("talk") Long talk) {
    final PlanningDTO dto = new PlanningDTO()
        .setRoom(room)
        .setTalk(talk);
    final Planning planning = mapper.toDomain(dto);
    service.delete(planning);
  }

  @POST
  @Transactional
  public PlanningDTO create(PlanningDTO dto) {
    return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
  }

  @PUT
  @Transactional
  public PlanningDTO update(PlanningDTO dto) {
    return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
  }


}
