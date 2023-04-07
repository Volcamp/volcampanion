package org.volcampanion.dto;

import java.time.LocalDateTime;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class PlanningDTO {
    private Long room;
    private Long talk;
    private LocalDateTime schedule;

}
