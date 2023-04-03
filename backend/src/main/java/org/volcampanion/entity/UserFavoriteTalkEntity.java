package org.volcampanion.entity;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "user_favorite_talks", schema = "volcampanion")
public class UserFavoriteTalkEntity {
    @EmbeddedId
    UserFavoriteTalkId id;
}
