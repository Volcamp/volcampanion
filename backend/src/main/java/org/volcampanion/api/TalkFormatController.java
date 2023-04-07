package org.volcampanion.api;


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
import javax.ws.rs.core.MediaType;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.volcampanion.domain.mappers.TalkFormatMapper;
import org.volcampanion.dto.CreateTalkFormatDTO;
import org.volcampanion.dto.TalkFormatDTO;
import org.volcampanion.exception.NotFoundException;
import org.volcampanion.service.TalkFormatService;

@Path("/talk-formats")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "Referential API")
public class TalkFormatController {

    @Inject
    TalkFormatService service;

    @Inject
    TalkFormatMapper mapper;

    @GET
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TalkFormatDTO[].class)
            )
    )
    public List<TalkFormatDTO> list() {
        return mapper.toDTO(service.list());
    }


    @GET
    @Path("/{id}")
    @APIResponse(responseCode = "404", description = "Talk format not found")
    @APIResponse(responseCode = "200", description = "OK",
            content = @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TalkFormatDTO.class)
            )
    )
    public TalkFormatDTO getById(@PathParam("id") Long id) {
        var conf = service.findById(id);
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
    public TalkFormatDTO create(CreateTalkFormatDTO dto) {
        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
    }

    @PUT
    @Transactional
    public TalkFormatDTO update(CreateTalkFormatDTO dto) {
        return mapper.toDTO(service.createOrUpdate(mapper.toDomain(dto)));
    }


}
