package org.volcampanion.domain;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class Talk extends IdentifiableDomain {
    private String title;
    private String description;
    private String level;
    private String language;
    private TalkTheme theme;
    private TalkFormat format;
    private Conference conference;
    private List<Speaker> speakers;
}

