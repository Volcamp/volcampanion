package org.volcampanion.dto;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class ConferenceDTO extends CreateConferenceDTO {
    private Long id;
}
