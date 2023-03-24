package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class TalkThemeDTO extends CreateTalkThemeDTO {
    private Long id;

}
