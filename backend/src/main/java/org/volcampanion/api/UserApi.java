package org.volcampanion.api;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.volcampanion.domain.User;
import org.volcampanion.domain.mappers.UserMapper;
import org.volcampanion.dto.BasicUserDTO;
import org.volcampanion.dto.UserDto;
import org.volcampanion.service.UserService;

import javax.inject.Inject;
import javax.persistence.PersistenceException;
import javax.transaction.RollbackException;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Slf4j
@Path("/api/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserApi {

    @Inject
    UserService userService;

    @Inject
    UserMapper userMapper;

    @GET
    @Path("/{id}")
    @APIResponse(description = "The user",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = UserDto.class)
            )
    )
    @APIResponse(responseCode = "404", description = "User not found")
    public Response getUser(@PathParam("id") long id) {
        try {
            UserDto dto = userMapper.domainToDto(userService.getById(id));
            return Response.ok(dto).build();
        } catch (Exception e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    @APIResponse(responseCode = "404", description = "User not found")
    @APIResponse(responseCode = "200", description = "Ok")
    public Response deleteUser(@PathParam("id") long id) {
        try {
            userService.delete(id);
            return Response.ok().build();
        }catch (Exception e){
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @PUT
    @Path("/{id}")
    @APIResponse(responseCode = "404", description = "User not found")
    @APIResponse(responseCode = "200", description = "Ok",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = BasicUserDTO.class)
            )

    )
    public UserDto updateUser(@PathParam("id") long id, BasicUserDTO user) {
        User domain = userMapper.dtoToDomain(user);
        domain.setId(id);
        return userMapper.domainToDto(userService.updateUser(domain));
    }


    @POST
    @Transactional
    @APIResponse(responseCode = "400", description = "Bad request")
    @APIResponse(responseCode = "201", description = "Created",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = BasicUserDTO.class)
            )
    )
    public Response create(BasicUserDTO newUser) {
        try {
            userService.creatUser(userMapper.dtoToDomain(newUser));
            return Response.status(Response.Status.CREATED).build();
        }catch (Exception e){
            return Response.status(Response.Status.BAD_REQUEST.getStatusCode(),e.getMessage()).build();
        }

    }

    @GET
    @APIResponse(responseCode = "400", description = "Bad request")
    @APIResponse(responseCode = "200", description = "OK")
    public Response getAllUser(@QueryParam("name") String name) {
        try {
            List<UserDto> results;
            if (StringUtils.isNotEmpty(name)) {
                results = userMapper.listDomainsToDtos(userService.listByName(name));
            } else {
                results = userMapper.listDomainsToDtos(userService.getAll());
            }
            return Response.ok(results).build();

        } catch (Exception e) {
            System.out.println("Error : " + e.getMessage());
            return Response.status(Response.Status.BAD_REQUEST.getStatusCode(),e.getMessage()).build();
        }
    }

    @POST
    @Path("/{userId}/talks/{talkId}/favorite")
    @APIResponse(responseCode = "400", description = "Bad request")
    @APIResponse(responseCode = "200", description = "OK")
    public Response associateTalkToFavorites(@PathParam("userId") long idUser, @PathParam("talkId") long idTalk) {
        try {
            userService.addTalktoFav(idTalk, idUser);
            return Response.ok().build();
        } catch (Exception e) {
            log.error(">>> " + e.getMessage());
            if (e instanceof RollbackException && e.getCause() instanceof PersistenceException) {
                return Response.status(Response.Status.CONFLICT.getStatusCode(), "This talk is already in your favorites...").build();
            }
            return Response.status(Response.Status.BAD_REQUEST.getStatusCode(), e.getMessage()).build();
        }
    }


    @POST
    @Path("/{speakerId}/talks/{talkId}/speaker")
    @APIResponse(responseCode = "400", description = "Bad request")
    @APIResponse(responseCode = "200", description = "OK")
    public Response associateSpeakerToTalk(@PathParam("speakerId") long idSpeaker, @PathParam("talkId") long idTalk) {
        try {
            userService.associateSpeakerToTalk(idSpeaker, idTalk);
            return Response.ok().build();
        } catch (Exception e) {
            log.error(">>> " + e.getMessage());
            if (e instanceof RollbackException && e.getCause() instanceof PersistenceException) {
                return Response.status(Response.Status.CONFLICT.getStatusCode(), "This speaker is already associate to this talk...").build();
            }
            return Response.status(Response.Status.BAD_REQUEST.getStatusCode(), e.getMessage()).build();
        }
    }
}