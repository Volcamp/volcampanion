package org.volcampanion.entity;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.experimental.Accessors;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "talks", schema = "volcampanion")
public class TalkEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String level;
    private String language;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "theme_id")
    private TalkThemeEntity theme;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "format_id")
    private TalkFormatEntity format;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conference_id")
    private ConferenceEntity conference;
    @ManyToMany(mappedBy = "talks")
    private List<SpeakerEntity> speakers;
    @OneToMany(mappedBy = "id.talk")
    private List<UserFavoriteTalkEntity> favorites = new ArrayList<>();
}
