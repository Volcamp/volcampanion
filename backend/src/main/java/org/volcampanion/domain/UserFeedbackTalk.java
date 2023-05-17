package org.volcampanion.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class UserFeedbackTalk extends IdentifiableDomain {
    private String userIdentifier;

    private String comment;

    private int rating;

    private Talk talk;
}
