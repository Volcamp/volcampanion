package org.volcampanion.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "conferences", schema = "volcampanion")
public class ConferenceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;


    private String nom;
    @Column(name = "date_debut")
    private Date dateDebut;
    @Column(name = "date_fin")
    private Date dateFin;

    @OneToMany(mappedBy = "confId")
    private List<TalkEntity> talks= new ArrayList<TalkEntity>();

    public List<TalkEntity> getTalk() {
        return talks;
    }

    public void setTalk(List<TalkEntity> talk) {
        this.talks = talk;
    }


       public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public Date getDateDebut() {
        return dateDebut;
    }


    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }
}
