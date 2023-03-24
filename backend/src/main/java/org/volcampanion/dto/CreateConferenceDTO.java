package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.Date;
import java.util.List;

@Data
@Accessors(chain = true)
public class CreateConferenceDTO {
    private String name;
    private Date startDate;
    private Date endDate;
}
