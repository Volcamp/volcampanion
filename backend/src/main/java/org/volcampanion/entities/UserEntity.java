package org.volcampanion.entities;

import org.volcampanion.util.UserRoles;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users", schema = "volcampanion")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Email
    @NotNull
    private String email;


    private String password;


    @Enumerated(EnumType.STRING)
    private UserRoles role;

    private String twitter;

    private String biographie;

    private String nom;

    @Column(name = "link_photo")
    private String linkPhoto;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_fav_talks",
            joinColumns = {@JoinColumn(name = "fk_user")},
            inverseJoinColumns = {@JoinColumn(name = "fk_talk")}
    )
    private List<TalkEntity> favTalks = new ArrayList<TalkEntity>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "user_speak_talk",
            joinColumns = {@JoinColumn(name = "fk_user")},
            inverseJoinColumns = {@JoinColumn(name = "fk_talk")}
    )
    private List<TalkEntity> speakTalks = new ArrayList<TalkEntity>();


    public List<TalkEntity> getFavTalks() {
        return favTalks;
    }


    public void setFavTalks(List<TalkEntity> favTalks) {
        this.favTalks = favTalks;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLinkPhotos(String linkPhoto) {
        this.linkPhoto = linkPhoto;
    }

    public String getLinkPhoto() {
        return linkPhoto;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserRoles getRole() {
        return role;
    }

    public void setRole(UserRoles role) {
        this.role = role;
    }

    public String getTwitter() {
        return twitter;
    }

    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }

    public String getBiographie() {
        return biographie;
    }

    public void setBiographie(String biographie) {
        this.biographie = biographie;
    }

    public List<TalkEntity> getSpeakTalks() {
        return speakTalks;
    }

    public void setSpeakTalks(List<TalkEntity> speakTalks) {
        this.speakTalks = speakTalks;
    }

    public void setLinkPhoto(String linkPhoto) {
        this.linkPhoto = linkPhoto;
    }
}
