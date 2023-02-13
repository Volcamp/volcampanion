package org.volcampanion.entities;

import org.volcampanion.util.TalkLevel;
import org.volcampanion.util.TalkTheme;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(name = "talkEntity")
@Table(name = "talks", schema = "volcampanion")
public class TalkEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String langue;

    @Enumerated(EnumType.STRING)
    private TalkLevel niveau;

    private Date date;
    private String description;

    @Enumerated(EnumType.STRING)
    private TalkTheme theme;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conf_id")
    private ConferenceEntity confId;

    public ConferenceEntity getConfId() {
        return confId;
    }

    public void setConfId(ConferenceEntity confId) {
        this.confId = confId;
    }

    private enum theme{keyNote, Langage, BigData};
    @Column(name = "nom_salle")
    private String nomSalle;

    @ManyToMany(mappedBy = "favTalks", fetch = FetchType.LAZY)
    private List<UserEntity> favedByUsers = new ArrayList<UserEntity>();

    @ManyToMany(mappedBy = "speakTalks", fetch = FetchType.LAZY)
    private List<UserEntity> speakers = new ArrayList<UserEntity>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getLangue() {
        return langue;
    }

    public void setLangue(String langue) {
        this.langue = langue;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        description = description;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNomSalle() {
        return nomSalle;
    }

    public void setNomSalle(String nomSalle) {
        this.nomSalle = nomSalle;
    }

    public List<UserEntity> getFavedByUsers() {
        return favedByUsers;
    }

    public void setFavedByUsers(List<UserEntity> favedByUsers) {
        this.favedByUsers = favedByUsers;
    }

    public void setNiveau(TalkLevel niveau) {
        this.niveau = niveau;
    }

    public TalkLevel getNiveau() {
        return niveau;
    }

    public TalkTheme getTheme() {
        return theme;
    }

    public void setTheme(TalkTheme theme) {
        this.theme = theme;
    }

    public List<UserEntity> getSpeakers() {
        return speakers;
    }

    public void setSpeakers(List<UserEntity> speakers) {
        this.speakers = speakers;
    }
}
