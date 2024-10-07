package org.volcampanion.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "feedbacks", schema = "volcampanion")
public class UserFeedbackTalkEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comment;
    private short rating;


    @Column(name = "user_id")
    private String userIdentifier;

    @ManyToOne
    @JoinColumn(name = "talk_id")
    private TalkEntity talk;
}

