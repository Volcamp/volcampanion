package org.volcampanion.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.experimental.Accessors;

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
