package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CreateSpeakerDTO {
    private String name;
    private String email;
    private String twitter;
    private String linkedin;
    private String biography;
    private String company;
    private String photo;
    private IdentifiableDTO conference;

}
