package org.volcampanion.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class SpeakerFilters {
    private Long conferenceId;
}
