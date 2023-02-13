package org.volcampanion.entities;


import javax.persistence.*;

@Entity
@Table(name = "feedbacks", schema = "volcampanion")
public class FeedBackEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String content;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "talk_id")
    private TalkEntity talk;

    public TalkEntity getTalk() {
        return talk;
    }

    public void setTalk(TalkEntity talk) {
        this.talk = talk;
    }

    public UserEntity getUser() {
        return user;
    }


    public void setUser(UserEntity user) {
        this.user = user;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
