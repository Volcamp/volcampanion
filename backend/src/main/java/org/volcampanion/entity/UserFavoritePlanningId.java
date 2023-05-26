package org.volcampanion.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Data
@Accessors(chain = true)
@Embeddable
public class UserFavoritePlanningId implements Serializable {

    @Column(name = "user_id")
    private String userIdentifier;


    @ManyToOne
    @JoinColumn(name = "planning_room_id")
    private RoomEntity room;

    @ManyToOne
    @JoinColumn(name = "planning_talk_id")
    private TalkEntity talk;

    @Column(name = "planning_schedule")
    private Timestamp schedule;
}
