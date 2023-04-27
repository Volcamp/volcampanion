package org.volcampanion.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class PlanningFilters {
    private Long conferenceId;
}
