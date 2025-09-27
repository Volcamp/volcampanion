package org.volcampanion.dto;

import java.util.List;
import lombok.Data;
import lombok.experimental.Accessors;

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
    private String openFeedbackUrl;
}

