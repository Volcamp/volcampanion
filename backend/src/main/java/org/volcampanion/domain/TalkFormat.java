package org.volcampanion.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.time.Duration;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class TalkFormat extends IdentifiableDomain {
    private String name;
    private String type;
    private String description;
    private Duration duration;

}
