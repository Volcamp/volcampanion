package org.volcampanion.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@EqualsAndHashCode(callSuper = true)
@Data
@Accessors(chain = true)
public class Room extends IdentifiableDomain{
    private String name;
    private String description;
    private Integer capacity;
    private Conference conference;
}
