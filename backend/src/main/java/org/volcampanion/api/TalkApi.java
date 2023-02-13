package org.volcampanion.api;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.volcampanion.domain.mappers.TalkMapper;
import org.volcampanion.dto.BasicUserDTO;
import org.volcampanion.dto.TalkDto;
import org.volcampanion.service.TalkService;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/api/talks")
public class TalkApi {

    @Inject
    TalkService talkService;

    @Inject
    TalkMapper talkMapper;

    @GET
    public Response getAll(@QueryParam("name")String name) {
        try {
            List<TalkDto> list ;
            if (StringUtils.isNotEmpty(name)){
                list = talkMapper.listDomainsToDto(
                        talkService.listByTitle(name)
                );
            }else {
                list = talkMapper.listDomainsToDto(
                        talkService.getAll()
                );
            }
            return Response.ok(list).build();
        }catch (Exception e){
            System.out.println("Error : " + e.getMessage());
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    @APIResponse(responseCode = "404", description = "Talk not found")
    @APIResponse(responseCode = "200", description = "OK",
        content = @Content(mediaType = "application/json",
                schema = @Schema(implementation = TalkDto.class)
        )
    )
    public TalkDto getTalk(@PathParam("id") long id) {
        return talkMapper.domainToDto(talkService.getById(id));
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    @APIResponse(responseCode = "404", description = "Talk not found")
    @APIResponse(responseCode = "200", description = "Ok")
    public Response deleteTalk(@PathParam("id") long id) {
        try {
            talkService.delete(id);
            return Response.ok().build();
        }catch (Exception e){
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    @APIResponse(responseCode = "201", description = "Created",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TalkDto.class)
            )
    )
    public Response addTalk(TalkDto talkDto) {
        try {
            talkService.creatTalk(talkMapper.dtoToDomain(talkDto));
            return Response.status(Response.Status.CREATED).build();
        }catch (Exception e){
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @APIResponse(responseCode = "404", description = "Talk not found")
    @APIResponse(responseCode = "200", description = "Ok",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = BasicUserDTO.class)
            )
    )
    public Response updateTalk(@PathParam("id") long id, TalkDto newTalk) {
        try {
            newTalk.setId(id);
            talkService.updateTalk(talkMapper.dtoToDomain(newTalk));
            return Response.ok(newTalk).build();
        }catch (Exception e){
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

}

