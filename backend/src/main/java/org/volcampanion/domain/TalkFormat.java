package org.volcampanion.domain;

import lombok.Data;
import lombok.experimental.Accessors;

import java.time.Duration;

@Data
@Accessors(chain = true)
public class TalkFormat extends IdentifiableDomain {
    private String name;
    private String description;
    private Duration duration;

}
