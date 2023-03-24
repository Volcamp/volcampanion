package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;
import org.volcampanion.domain.Talk;

import java.util.ArrayList;
import java.util.List;

@Data
@Accessors(chain = true)
public class CreateSpeakerDTO {
    private String name;
    private String email;
    private String twitter;
    private String linkedin;
    private String biography;
    private String photo;
    private Long conferenceId;

}
