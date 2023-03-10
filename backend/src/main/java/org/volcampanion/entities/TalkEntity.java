package org.volcampanion.entities;

import javax.persistence.*;

@Entity(name = "talkEntity")
@Table(name = "talks", schema = "volcampanion")
public class TalkEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conference_id")
    private ConferenceEntity conferenceId;


}
