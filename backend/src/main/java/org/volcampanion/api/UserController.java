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
import org.volcampanion.domain.Planning;
import org.volcampanion.domain.Talk;
import org.volcampanion.domain.UserFavoritePlanning;
import org.volcampanion.domain.UserFeedbackTalk;
import org.volcampanion.domain.mappers.PlanningMapper;
import org.volcampanion.domain.mappers.UserFeedbackTalkMapper;
import org.volcampanion.dto.*;
import org.volcampanion.exception.MandatoryParameterException;
import org.volcampanion.exception.dto.ErrorDTO;
import org.volcampanion.service.*;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "User App API")
@Authenticated
@RequestScoped
public class UserController {

    @Inject
    JsonWebToken jwt;

    @Inject
    TalkService talkService;

    @Inject
    RoomService roomService;

    @Inject
    PlanningService planningService;

    @Inject
    PlanningMapper planningMapper;

    @Inject
    UserFeedbackTalkMapper userFeedbackTalkMapper;

    @Inject
    UserFavoritePlanningService userFavoritePlanningService;

    @Inject
    IdentifiableValidator identifiableValidator;

    @Inject
    UserFeedbackTalkService userFeedbackTalkService;


    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TalkDTO[].class)
            )
    )
    @Path("/plannings/favorite")
    public List<PlanningDTO> listFavoritePlannings(@QueryParam("idConf") Long idConf) {
        // FIXME the loop should be done other way this is only temporary
        List<Planning> plannings = new ArrayList<>();
        for (UserFavoritePlanning userFavoritePlanning :
                userFavoritePlanningService.listByUser(verifyEmail(jwt.getClaim(Claims.email)))) {
            plannings.add(userFavoritePlanning.getPlanning());

        }

        return planningMapper.toDTO(plannings);
    }

    @POST
    @Path("/plannings/favorite")
    @Transactional
    @APIResponse(responseCode = "409", description = "This talk is already added as favorite",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ErrorDTO.class)
            )
    )
    public Response addPlanningToFavorite(CreatePlanningDTO planningDTO) {
        var domain = validateParamsAndBuildFavoritePlanningDomain(planningDTO, verifyEmail(jwt.getClaim(Claims.email)));
        userFavoritePlanningService.createOrUpdate(domain);
        return Response.status(Response.Status.CREATED).build();
    }

    @DELETE
    @Path("/plannings/favorite")
    @Transactional
    public void removePlanningFromFavorite(@QueryParam("idTalk") Long idTalk,
                                           @QueryParam("date") String date, @QueryParam("idRoom") Long idRoom) {

        var userFavoritePlanning = new UserFavoritePlanning().setUserIdentifier(verifyEmail(jwt.getClaim(Claims.email))).
                setPlanning(planningService.findById(
                        new Planning().
                                setRoom(roomService.findById(idRoom)).
                                setTalk(talkService.findById(idTalk)).
                                setSchedule(LocalDateTime.parse(date, DateTimeFormatter.ISO_DATE_TIME))
                ));

        userFavoritePlanningService.delete(userFavoritePlanningService.findById(userFavoritePlanning));
    }

    private UserFavoritePlanning validateParamsAndBuildFavoritePlanningDomain(CreatePlanningDTO planningDTO, String userEmail) {
        var planning = validateSubResourcesPlanning(planningDTO, userEmail);

        return new UserFavoritePlanning()
                .setUserIdentifier(userEmail)
                .setPlanning(planning);
    }

    private Planning validateSubResourcesPlanning(CreatePlanningDTO planningDTO, String userEmail) {
        verifyEmail(userEmail);

        var planning = planningService.findById(planningMapper.toDomain(planningDTO));

        if (Objects.isNull(planning)) {
            throw new BadRequestException(String.format("Unable to retrieve a planning using given parameter %s", planningDTO));
        }
        return planning;
    }

    private Talk validateSubResources(Long talkId, String userEmail) {
        verifyEmail(userEmail);

        var talk = identifiableValidator.validate(new IdentifiableDTO().setId(talkId),
                "talk->id",
                (aLong) -> talkService.findById(aLong));

        if (Objects.isNull(talk)) {
            throw new BadRequestException(String.format("Unable to retrieve a talk using given parameter %s", talkId));
        }
        return talk;
    }

    private static String verifyEmail(String userEmail) {
        if (StringUtils.isBlank(userEmail)) {
            throw new MandatoryParameterException("JWT->email");
        }
        return userEmail;
    }

    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = UserFeedbackTalkDTO[].class)
            )
    )
    @Path("/talks/{idTalk}/feedback")
    public List<UserFeedbackTalkDTO> listFeedbackTalk(@PathParam("idTalk") Long idTalk) {
        return userFeedbackTalkMapper.toDTO(userFeedbackTalkService.listByTalk(idTalk));
    }

    @POST
    @Path("/talks/{idTalk}/feedback")
    @Transactional
    @APIResponse(
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ErrorDTO.class)
            )
    )
    public Response addFeedbackToTalk(@PathParam("idTalk") Long talkId, CreateUserFeedbackTalkDTO dto) {
        var domain = validateParamsFeedbackTalkDomain(talkId, jwt.getClaim(Claims.email))
                .setRating(dto.getRating())
                .setComment(dto.getComment());

        userFeedbackTalkService.createOrUpdate(domain);
        return Response.status(Response.Status.CREATED).build();
    }

    @DELETE
    @Path("/talks/{idTalk}/feedback")
    @Transactional
    public void removeFeedbackFromTalk(@PathParam("idTalk") Long talkId) {
        var domain = validateParamsFeedbackTalkDomain(talkId, jwt.getClaim(Claims.email));
        userFeedbackTalkService.deleteByTalk(domain);
    }

    private UserFeedbackTalk validateParamsFeedbackTalkDomain(Long talkId, String userEmail) {
        var talk = validateSubResources(talkId, userEmail);

        return new UserFeedbackTalk()
                .setUserIdentifier(userEmail)
                .setTalk(talk);
    }


}
