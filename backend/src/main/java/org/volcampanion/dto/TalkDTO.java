package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class TalkDTO {
    private Long id;
    private String title;
    private String description;
    private String level;
    private String language;
    private IdentifiableDTO conference;
    private TalkThemeDTO theme;
    private TalkFormatDTO format;
    private List<SpeakerDTO> speakers;
}

