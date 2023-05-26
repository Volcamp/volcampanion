package org.volcampanion.entity;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Data;
import lombok.experimental.Accessors;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "plannings", schema = "volcampanion")
public class PlanningEntity {

  @EmbeddedId
  private PlanningId id;

  // FIXME Maybe we need to do this but I (rami) dont know how
//  @OneToMany(mappedBy = "{id}")
//  private List<UserFavoritePlanningEntity> favorites = new ArrayList<>();

}
