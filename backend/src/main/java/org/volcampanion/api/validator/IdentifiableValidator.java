package org.volcampanion.api.validator;

import org.volcampanion.dto.IdentifiableDTO;
import org.volcampanion.exception.BadRequestException;
import org.volcampanion.exception.MandatoryParameterException;

import jakarta.enterprise.context.ApplicationScoped;
import java.util.Objects;
import java.util.function.Function;

@ApplicationScoped
public class IdentifiableValidator {

    public static final String ID_PROVIDED_WAS_NOT_FOUND = "%s provided was not found";

    public <Domain> Domain validate(IdentifiableDTO dto,
                                    String idPath,
                                    Function<Long, Domain> findByIdFunction) {
        return validate(dto, idPath, findByIdFunction, Boolean.TRUE);
    }

    public <Domain> Domain validate(IdentifiableDTO dto,
                                    String idPath,
                                    Function<Long, Domain> findByIdFunction,
                                    Boolean isMandatory) {
        if (isMandatory) {
            if (Objects.isNull(dto) || Objects.isNull(dto.getId())) {
                throw new MandatoryParameterException(idPath);
            }
            var res = findByIdFunction.apply(dto.getId());
            if (Objects.isNull(res)) {
                throw new BadRequestException(String.format(ID_PROVIDED_WAS_NOT_FOUND, idPath));
            }
            return res;
        }

        if (!Objects.isNull(dto) && !Objects.isNull(dto.getId())) {
            return findByIdFunction.apply(dto.getId());
        }

        return null;
    }
}
