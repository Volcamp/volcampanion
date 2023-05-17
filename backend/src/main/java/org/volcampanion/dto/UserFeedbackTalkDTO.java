package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class UserFeedbackTalkDTO {
    private Long id;
    private String comment;
    private int rating;
    private TalkDTO talk;
}
