package org.volcampanion.api.validator;

import java.util.Objects;
import java.util.function.Function;
import javax.inject.Singleton;
import org.volcampanion.dto.IdentifiableDTO;
import org.volcampanion.exception.BadRequestException;
import org.volcampanion.exception.MandatoryParameterException;

@Singleton
public class IdentifiableValidator {

    public static final String ID_PROVIDED_WAS_NOT_FOUND = "%s provided was not found";

    public <Domain> Domain validate(IdentifiableDTO dto,
                                    String mandatoryPath,
                                    Function<Long, Domain> findByIdFunction) {
        if (Objects.isNull(dto) || Objects.isNull(dto.getId())) {
            throw new MandatoryParameterException(mandatoryPath);
        }

        var res = findByIdFunction.apply(dto.getId());
        if (Objects.isNull(res)) {
            throw new BadRequestException(String.format(ID_PROVIDED_WAS_NOT_FOUND, mandatoryPath));
        }
        return res;
    }
}
