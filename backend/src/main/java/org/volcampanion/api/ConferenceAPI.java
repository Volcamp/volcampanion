package org.volcampanion.api;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.volcampanion.domain.mappers.ConferenceMapper;
import org.volcampanion.domain.mappers.TalkMapper;
import org.volcampanion.dto.ConferenceDTO;
import org.volcampanion.service.ConferenceService;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/api/conference")

public class ConferenceAPI {

    @Inject
    ConferenceService confService;

    @Inject
    TalkMapper talkMapper;

    @Inject
    ConferenceMapper confMapper;

    @GET
    public Response getAll(@QueryParam("name")String name) {
        try {
            List<ConferenceDTO> list ;
            if (StringUtils.isNotEmpty(name)){
                list = confMapper.listDomainToDto(
                        confService.listByName(name)
                );
            }else {
                list = confMapper.listDomainToDto(
                        confService.getAll()
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
                    schema = @Schema(implementation = ConferenceDTO.class)
            )
    )
    public ConferenceDTO getConference(@PathParam("id") long id) {
        return confMapper.domainToDTO(confService.getById(id));
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    @APIResponse(responseCode = "201", description = "Created",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ConferenceDTO.class)
            )
    )
    public Response addConference(ConferenceDTO conferenceDTO) {
        try {
            confService.createConference(confMapper.dtoToDomainCreate(conferenceDTO));

            return Response.ok().build();
        }catch (Exception e){
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }
    @DELETE
    @Path("/{id}")
    @Transactional
    public boolean deleteConference(@PathParam("id")String id)
    {
        return confService.deleteConfTalk(Long.parseLong(id));
    }
    @PUT
    @Path("/{id}")
    public Response updateConference(@PathParam("id")String id, ConferenceDTO confDTO) throws Exception {

        try{
            confDTO.setId(Long.parseLong(id));
            confService.updateConference(confMapper.dtoToDomain(confDTO));
            return Response.ok(confDTO).build();
        }
        catch (Exception e){
        return Response.status(Response.Status.NOT_FOUND).build();
    }
    }


    @GET
    @APIResponse(responseCode = "400", description = "Bad request")
    @APIResponse(responseCode = "200", description = "OK")
    public Response getAllConference(@QueryParam("name") String name) {
        try {
            List<ConferenceDTO> results;
            if (StringUtils.isNotEmpty(name)) {
                results = confMapper.listDomainToDto(confService.listByName(name));
            } else {
                results = confMapper.listDomainToDto(confService.getAll());
            }
            return Response.ok(results).build();

        } catch (Exception e) {
            System.out.println("Error : " + e.getMessage());
            return Response.status(Response.Status.BAD_REQUEST.getStatusCode(),e.getMessage()).build();
        }
    }

}


    /*
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getTalk(){return "the Conference API";}

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public ConferenceDTO getConference(@PathParam("id") String id){
        ConferenceDTO dto =  confService.domainToDTO(confService.getById(Long.parseLong(id)));
        return dto;
    }
    @DELETE
    @Path("/{id}")
    @Transactional
    public boolean deleteConference(@PathParam("id")String id)
    {
        return confService.deleteConfTalk(Long.parseLong(id));
    }
    @PUT
    @Path("/{id}")
    public void updateConference(@PathParam("id")String id, ConferenceDTO confDTO) throws Exception {
        confDTO.setId(Long.parseLong(id));
        confService.updateUser(ConferenceMapper.dtoToDomain(confDTO));
    }
*/

