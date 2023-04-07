package org.volcampanion.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Data;
import lombok.experimental.Accessors;

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
