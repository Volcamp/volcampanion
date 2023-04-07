package org.volcampanion.domain;

import java.time.LocalDateTime;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Planning {

    private Room room;

    private Talk talk;

    private LocalDateTime schedule;
}
