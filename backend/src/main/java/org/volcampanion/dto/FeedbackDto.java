package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class FeedbackDto {
    private Long id;
    private String content;
    private UserDto user;
    private TalkDto talk;
}
