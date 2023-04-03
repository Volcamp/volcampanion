package org.volcampanion.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Data
@Accessors(chain = true)
@Embeddable
public class UserFavoriteTalkId implements Serializable {

    @Column(name = "user_id")
    private String userIdentifier;

    @ManyToOne
    @JoinColumn(name = "talk_id")
    private TalkEntity talk;
}
