package org.volcampanion.api;


import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import org.apache.commons.collections4.CollectionUtils;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.api.validator.IdentifiableValidator;
import org.volcampanion.domain.Talk;
import org.volcampanion.domain.TalkFilters;
import org.volcampanion.domain.mappers.TalkMapper;
import org.volcampanion.dto.CreateTalkDTO;
import org.volcampanion.dto.TalkDTO;
import org.volcampanion.exception.NotFoundException;
import org.volcampanion.service.*;

import java.util.ArrayList;
import java.util.List;

@Path("/talks")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Talks API")
//@RolesAllowed("Admin")
public class TalkController {

    @Inject
    TalkService service;

    @Inject
    TalkThemeService talkThemeService;

    @Inject
    TalkFormatService talkFormatService;

    @Inject
    ConferenceService conferenceService;

    @Inject
    SpeakerService speakerService;

    @Inject
    IdentifiableValidator identifiableValidator;

    @Inject
    TalkMapper mapper;

    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TalkDTO[].class)
            )
    )
    @Tag(name = "Talks API")
    public List<TalkDTO> list(@QueryParam("idConf") Long idConf) {
        return mapper.toDTO(service.listWithFilters(new TalkFilters()
                .setConferenceId(idConf))
        );
    }

    @GET
    @Path("/{idTalk}")
    @APIResponse(responseCode = "404", description = "Talk not found")
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TalkDTO.class)
            )
    )
    @Tag(name = "Talks API")
    public TalkDTO getTalkById(@PathParam("idTalk") Long idTalk) {
        var talk = service.findById(idTalk);
        if (talk == null) {
            throw new NotFoundException();
        }
        return mapper.toDTO(talk);
    }

//    @DELETE
//    @Path("/{id}")
//    public void delete(@PathParam("id") Long id) {
//        service.deleteById(id);
//    }
//
//    @POST
//    @Transactional
//    public TalkDTO create(CreateTalkDTO dto) {
//        var talk = populateTalkWithSubEntities(dto);
//
//        return mapper.toDTO(service.createOrUpdate(talk));
//    }
//
//    @PUT
//    @Transactional
//    public TalkDTO update(CreateTalkDTO dto) {
//        var talk = populateTalkWithSubEntities(dto);
//        return mapper.toDTO(service.createOrUpdate(talk));
//    }

    private Talk populateTalkWithSubEntities(CreateTalkDTO dto) {
        var format = identifiableValidator.validate(dto.getFormat(),
                "format->id",
                (aLong) -> talkFormatService.findById(aLong));

        var theme = identifiableValidator.validate(dto.getTheme(),
                "theme->id",
                (aLong) -> talkThemeService.findById(aLong),
                false);

        var conf = identifiableValidator.validate(dto.getConference(),
                "conference->id",
                (aLong) -> conferenceService.findById(aLong));

        var talk = mapper.toDomain(dto)
                .setTheme(theme)
                .setFormat(format)
                .setConference(conf);

        if (CollectionUtils.isNotEmpty(dto.getSpeakers())) {
            talk.setSpeakers(new ArrayList<>());
            for (var i = 0; i < dto.getSpeakers().size(); i++) {
                talk.getSpeakers().add(identifiableValidator.validate(dto.getSpeakers().get(i),
                        String.format("speakers[%s]->id", i),
                        aLong -> speakerService.findById(aLong))
                );
            }
        }
        return talk;
    }

}
