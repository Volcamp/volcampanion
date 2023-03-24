package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.time.Duration;

@Data
@Accessors(chain = true)
public class TalkFormatDTO extends CreateTalkFormatDTO {
    private Long id;

}
