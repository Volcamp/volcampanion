package org.volcampanion.api;

import io.quarkus.security.Authenticated;
import org.apache.commons.lang3.StringUtils;
import org.eclipse.microprofile.jwt.Claims;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.api.validator.IdentifiableValidator;
import org.volcampanion.domain.TalkFilters;
import org.volcampanion.domain.UserFavoriteTalk;
import org.volcampanion.domain.mappers.TalkMapper;
import org.volcampanion.dto.IdentifiableDTO;
import org.volcampanion.dto.TalkDTO;
import org.volcampanion.exception.MandatoryParameterException;
import org.volcampanion.exception.dto.ErrorDTO;
import org.volcampanion.service.TalkService;
import org.volcampanion.service.UserFavoriteTalkService;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Objects;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Volcampanion App API")
@Authenticated
@RequestScoped
public class UserController {

    @Inject
    JsonWebToken jwt;

    @Inject
    TalkService talkService;

    @Inject
    TalkMapper talkMapper;


    @Inject
    UserFavoriteTalkService userFavoriteTalkService;

    @Inject
    IdentifiableValidator identifiableValidator;

    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TalkDTO[].class)
            )
    )
    @Path("/favorite-talks")
    public List<TalkDTO> listFavoriteTalks(@QueryParam("idConf") Long idConf) {
        var userEmail = String.valueOf(jwt.getClaim(Claims.email));
        return talkMapper.toDTO(talkService.listWithFilters(
                        new TalkFilters()
                                .setConferenceId(idConf)
                                .setUserIdentifier(userEmail)
                )
        );
    }

    @POST
    @Path("/talks/{idTalk}/favorite")
    @Transactional
    @APIResponse(responseCode = "409", description = "This talk is already added as favorite",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ErrorDTO.class)
            )
    )
    public Response addTalkToFavorite(@PathParam("idTalk") Long talkId) {
        var domain = validateParamsAndBuildFavoriteTalkDomain(talkId, jwt.getClaim(Claims.email));

        userFavoriteTalkService.createOrUpdate(domain);
        return Response.status(Response.Status.CREATED).build();
    }

    @DELETE
    @Path("/talks/{idTalk}/favorite")
    @Transactional
    public void removeTalkFromFavorite(@PathParam("idTalk") Long talkId) {
        var domain = validateParamsAndBuildFavoriteTalkDomain(talkId, jwt.getClaim(Claims.email));

        userFavoriteTalkService.delete(domain);
    }

    private UserFavoriteTalk validateParamsAndBuildFavoriteTalkDomain(Long talkId, String userEmail) {
        if (StringUtils.isBlank(userEmail)) {
            throw new MandatoryParameterException("JWT->email");
        }

        var talk = identifiableValidator.validate(new IdentifiableDTO().setId(talkId),
                "talk->id",
                (aLong) -> talkService.findById(aLong));

        if (Objects.isNull(talk)) {
            throw new BadRequestException(String.format("Unable to retrieve a talk using given parameter %s", talkId));
        }

        return new UserFavoriteTalk()
                .setUserIdentifier(userEmail)
                .setTalk(talk);
    }


}
