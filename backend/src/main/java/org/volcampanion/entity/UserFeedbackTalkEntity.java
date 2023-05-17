package org.volcampanion.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "feedbacks", schema = "volcampanion")
public class UserFeedbackTalkEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comment;
    private int rating;


    @Column(name = "user_id")
    private String userIdentifier;

    @ManyToOne
    @JoinColumn(name = "talk_id")
    private TalkEntity talk;
}

