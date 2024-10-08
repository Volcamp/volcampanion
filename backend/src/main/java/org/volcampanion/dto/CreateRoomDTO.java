package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CreateRoomDTO {
    private String name;
    private String description;
    private Integer capacity;
}
