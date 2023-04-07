package org.volcampanion.domain;

import java.time.Duration;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class TalkFormat extends IdentifiableDomain {
    private String name;
    private String description;
    private Duration duration;

}
