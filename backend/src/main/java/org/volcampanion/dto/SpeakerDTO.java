package org.volcampanion.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class SpeakerDTO extends CreateSpeakerDTO {
    private Long id;

}
