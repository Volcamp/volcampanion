package org.volcampanion.api;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.api.validator.IdentifiableValidator;
import org.volcampanion.domain.Talk;
import org.volcampanion.domain.UserFeedbackTalk;
import org.volcampanion.dto.CreateUserFeedbackTalkDTO;
import org.volcampanion.dto.IdentifiableDTO;
import org.volcampanion.exception.dto.ErrorDTO;
import org.volcampanion.service.TalkService;
import org.volcampanion.service.UserFeedbackTalkService;

import java.util.Objects;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "User App API")
@RequestScoped
public class UserController {

    @Inject
    UserFeedbackTalkService userFeedbackTalkService;

    @Inject
    TalkService talkService;

    @Inject
    IdentifiableValidator identifiableValidator;

    @POST
    @Path("/talks/{idTalk}/feedback")
    @Transactional
    @APIResponse(
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = ErrorDTO.class)
            )
    )
    public Response addFeedbackToTalk(@PathParam("idTalk") Long talkId, CreateUserFeedbackTalkDTO dto) {
        var domain = validateParamsFeedbackTalkDomain(talkId)
                .setRating(dto.getRating())
                .setComment(dto.getComment());

        userFeedbackTalkService.createOrUpdate(domain);
        return Response.status(Response.Status.CREATED).build();
    }


    private UserFeedbackTalk validateParamsFeedbackTalkDomain(Long talkId) {
        var talk = validateSubResources(talkId);

        return new UserFeedbackTalk()
                .setUserIdentifier("Volcampeur")
                .setTalk(talk);
    }

    private Talk validateSubResources(Long talkId) {

        var talk = identifiableValidator.validate(new IdentifiableDTO().setId(talkId),
                "talk->id",
                (aLong) -> talkService.findById(aLong));

        if (Objects.isNull(talk)) {
            throw new BadRequestException(String.format("Unable to retrieve a talk using given parameter %s", talkId));
        }
        return talk;
    }
}
