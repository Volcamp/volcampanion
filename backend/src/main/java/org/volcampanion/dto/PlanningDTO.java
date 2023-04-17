package org.volcampanion.dto;

import java.time.LocalDateTime;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class PlanningDTO {
    private IdentifiableDTO room;
    private IdentifiableDTO talk;
    private LocalDateTime schedule;

}
