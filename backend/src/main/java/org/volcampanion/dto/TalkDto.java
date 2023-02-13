package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;
import org.volcampanion.util.TalkLevel;
import org.volcampanion.util.TalkTheme;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@Accessors(chain = true)
public class TalkDto {
    private Long id;
    private String titre;
    private String langue;
    private TalkLevel niveau;
    private Date date;
    private String description;
    private TalkTheme theme;
    private String nomSalle;
    private ConferenceDTO conferenceDTO;
    private List<EmbedUserDTO> speakers = new ArrayList<>();

    @Data
    @Accessors(chain = true)
    public static class EmbedUserDTO {
        private Long id;
        private String email;
        private String twitter;
        private String biographie;
        private String nom;
        private String linkPhoto;
    }


}
