package org.volcampanion.exception;

import org.volcampanion.exception.dto.ErrorDTO;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class ExceptionHandler implements ExceptionMapper<VolcampanionException> {

    @Override
    public Response toResponse(VolcampanionException e) {
        if (e instanceof NotFoundException) {
            return Response.status(Response.Status.NOT_FOUND).build();
        } else if (e instanceof MandatoryParameterException || e instanceof BadRequestException) {
            return Response.status(Response.Status.BAD_REQUEST).entity(new ErrorDTO().setError(e.getMessage())).build();
        } else {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).
                    entity(new ErrorDTO().setError(e.getMessage())).build();
        }
    }
}
