package org.volcampanion.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class TalkFilters {
    private Long conferenceId;
    private String userIdentifier;
}
