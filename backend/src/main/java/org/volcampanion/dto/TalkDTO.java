package org.volcampanion.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.volcampanion.domain.*;

import java.util.List;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class TalkDTO extends CreateTalkDTO {
    private Long id;
}

