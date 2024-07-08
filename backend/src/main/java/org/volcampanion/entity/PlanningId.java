package org.volcampanion.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@Embeddable
public class PlanningId implements Serializable {

    @ManyToOne
    @JoinColumn(name = "room_id")
    private RoomEntity room;

    @ManyToOne
    @JoinColumn(name = "talk_id")
    private TalkEntity talk;

    private Timestamp schedule;
}
