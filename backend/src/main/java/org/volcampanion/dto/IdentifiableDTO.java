package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class IdentifiableDTO {
    private Long id;

    public static IdentifiableDTO of(Long id){
        return new IdentifiableDTO().setId(id);
    }
}
