package org.volcampanion.entities;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "speakers", schema = "volcampanion")
public class SpeakerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String twitter;
    private String linkedin;
    private String biography;
    @Column(name = "photo_link")
    private String photo;

    @ManyToOne
    @JoinColumn(name = "conference_id")
    private ConferenceEntity conference;

    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "speakers_talk",
            joinColumns = {@JoinColumn(name = "speaker_id")},
            inverseJoinColumns = {@JoinColumn(name = "talk_id")}
    )
    private List<TalkEntity> talks = new ArrayList<>();

}
