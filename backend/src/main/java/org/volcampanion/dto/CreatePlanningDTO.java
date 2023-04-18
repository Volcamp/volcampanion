package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Data
@Accessors(chain = true)
public class CreatePlanningDTO {
    private IdentifiableDTO room;
    private IdentifiableDTO talk;
    private LocalDateTime schedule;

}
