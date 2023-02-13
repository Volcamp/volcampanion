package org.volcampanion.domain;

import org.volcampanion.util.TalkLevel;
import org.volcampanion.util.TalkTheme;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Talk {
    private Long id;
    private String titre;
    private String langue;
    private TalkLevel niveau;
    private Date date;
    private String description;
    private TalkTheme theme;
    private String nomSalle;
    private Conference conf_id;
    private List<User> favedByUsers = new ArrayList<>();
    private List<User> speakers = new ArrayList<>();
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNomSalle() {
        return nomSalle;
    }

    public void setNomSalle(String nomSalle) {
        this.nomSalle = nomSalle;
    }
    public void setConf_id(Conference conf_id) {
        this.conf_id = conf_id;
    }

    public Conference getConf_id() {
        return conf_id;
    }

    public List<User> getFavedByUsers() {
        return favedByUsers;
    }

    public void setFavedByUsers(List<User> favedByUsers) {
        this.favedByUsers = favedByUsers;
    }

    public TalkLevel getNiveau() {
        return niveau;
    }

    public void setNiveau(TalkLevel niveau) {
        this.niveau = niveau;
    }

    public TalkTheme getTheme() {
        return theme;
    }

    public void setTheme(TalkTheme theme) {
        this.theme = theme;
    }

    public List<User> getSpeakers() {
        return speakers;
    }

    public void setSpeakers(List<User> speakers) {
        this.speakers = speakers;
    }
}
