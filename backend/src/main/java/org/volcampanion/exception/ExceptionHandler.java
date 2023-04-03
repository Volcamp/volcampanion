package org.volcampanion.exception;

import lombok.extern.slf4j.Slf4j;
import org.hibernate.exception.ConstraintViolationException;
import org.volcampanion.exception.dto.ErrorDTO;

import javax.persistence.PersistenceException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
@Slf4j
public class ExceptionHandler implements ExceptionMapper<RuntimeException> {

    @Override
    public Response toResponse(RuntimeException e) {
        if (e instanceof NotFoundException) {
            return Response.status(Response.Status.NOT_FOUND).build();
        } else if (e instanceof MandatoryParameterException || e instanceof BadRequestException) {
            return Response.status(Response.Status.BAD_REQUEST).entity(new ErrorDTO().setError(e.getMessage())).build();
        } else if (e instanceof PersistenceException) {
            if (e.getCause() instanceof ConstraintViolationException
                    && e.getCause().getCause().getMessage().contains("violates")) {
                return Response.status(Response.Status.CONFLICT).entity(
                        new ErrorDTO().setError("A record already exists for this given id.")
                ).build();
            }
            return Response.status(Response.Status.BAD_REQUEST).build();
        } else {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).
                    entity(new ErrorDTO().setError(e.getMessage())).build();
        }
    }
}
