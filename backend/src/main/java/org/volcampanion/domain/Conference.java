package org.volcampanion.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Conference {
    private long id;
    private String nom;
    private Date dateDebut;
    private Date dateFin;


    private List<Talk> talk;
    public List<Talk> getTalk() {
        return talk;
    }
    public void setTalk(List<Talk> conf) {
        this.talk = conf;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<Conference> getConference() {
        return conference;
    }

    public void setConference(List<Conference> conference) {
        this.conference = conference;
    }


    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

    private List<Conference> conference= new ArrayList<>();

    public Date getDebut() {
        return dateDebut;
    }

    public void setDebut(Date debut) {
        this.dateDebut = debut;
    }
    public void setNom(String Nom) {
        this.nom=Nom;
    }

    public String getNom() {
        return nom;
    }

    public List<Conference> getConfListe() {
        return conference;
    }

    public void setConf(Conference confDTO) {
    this.conference.add(confDTO);
    }
}

