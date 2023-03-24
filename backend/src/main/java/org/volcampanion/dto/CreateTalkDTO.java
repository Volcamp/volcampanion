package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class CreateTalkDTO {
    private String title;
    private String description;
    private String level;
    private String language;
    private IdentifiableDTO theme;
    private IdentifiableDTO format;
    private IdentifiableDTO conference;
    private List<IdentifiableDTO> speakers;
}

