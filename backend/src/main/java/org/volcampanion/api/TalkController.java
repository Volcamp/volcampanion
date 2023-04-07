package org.volcampanion.api;


import java.util.ArrayList;
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
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
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
import org.volcampanion.service.ConferenceService;
import org.volcampanion.service.SpeakerService;
import org.volcampanion.service.TalkFormatService;
import org.volcampanion.service.TalkService;
import org.volcampanion.service.TalkThemeService;

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
    @Tag(name = "Volcampanion App API")
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
    @Tag(name = "Volcampanion App API")
    @Tag(name = "Talks API")
    public TalkDTO getTalkById(@PathParam("idTalk") Long idTalk) {
        var conf = service.findById(idTalk);
        if (conf == null) {
            throw new NotFoundException();
        }
        return mapper.toDTO(conf);
    }

    @DELETE
    @Path("/{id}")
    public void delete(@PathParam("id") Long id) {
        service.deleteById(id);
    }

    @POST
    @Transactional
    public TalkDTO create(CreateTalkDTO dto) {
        var talk = populateTalkWithSubEntities(dto);

        return mapper.toDTO(service.createOrUpdate(talk));
    }

    @PUT
    @Transactional
    public TalkDTO update(CreateTalkDTO dto) {
        var talk = populateTalkWithSubEntities(dto);
        return mapper.toDTO(service.createOrUpdate(talk));
    }

    private Talk populateTalkWithSubEntities(CreateTalkDTO dto) {
        var theme = identifiableValidator.validate(dto.getTheme(),
                "theme->id",
                (aLong) -> talkThemeService.findById(aLong));

        var format = identifiableValidator.validate(dto.getFormat(),
                "format->id",
                (aLong) -> talkFormatService.findById(aLong));

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
