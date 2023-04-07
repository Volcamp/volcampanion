package org.volcampanion.entity;

import java.sql.Timestamp;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
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

  private Timestamp schedule;
}
