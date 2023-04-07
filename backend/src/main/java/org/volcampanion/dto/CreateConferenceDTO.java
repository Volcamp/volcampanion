package org.volcampanion.dto;

import java.util.Date;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CreateConferenceDTO {
    private String name;
    private Date startDate;
    private Date endDate;
}
