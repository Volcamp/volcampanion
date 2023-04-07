package org.volcampanion.dto;

import java.time.Duration;
import java.time.temporal.ChronoUnit;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CreateTalkFormatDTO {
    private String name;
    private String type;
    private String description;
    private ChronoUnit durationUnit;
    private Long durationTime;

    public Duration getDuration() {
        return Duration.of(durationTime, durationUnit);
    }

    public void setDuration(Duration duration) {
        this.durationTime = duration.toMinutes();
        this.durationUnit = ChronoUnit.MINUTES;
    }

}
