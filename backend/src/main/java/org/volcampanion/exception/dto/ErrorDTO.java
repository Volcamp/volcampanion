package org.volcampanion.exception.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ErrorDTO {
    private String error;
}
