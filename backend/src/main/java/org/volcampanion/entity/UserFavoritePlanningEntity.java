package org.volcampanion.entity;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.experimental.Accessors;


@Entity
@Data
@Accessors(chain = true)
@Table(name = "user_favorite_plannings", schema = "volcampanion")
public class UserFavoritePlanningEntity {
    @EmbeddedId
    UserFavoritePlanningId id;
}
