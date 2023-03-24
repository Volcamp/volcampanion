package org.volcampanion.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.volcampanion.domain.Talk;

import java.util.ArrayList;
import java.util.List;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class SpeakerDTO extends CreateSpeakerDTO {
    private Long id;

}
