package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.PlanningEntity;
import org.volcampanion.entity.PlanningId;

@ApplicationScoped
public class PlanningRepository implements PanacheRepositoryBase<PlanningEntity, PlanningId> {
}
