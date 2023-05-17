package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CreateUserFeedbackTalkDTO {
    private String comment;
    private int rating;
}
