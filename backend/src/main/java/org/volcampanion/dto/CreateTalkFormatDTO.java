package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CreateTalkFormatDTO {
    private String name;
    private String type;
    private String description;
    private Integer duration; //in minutes

}
