package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.PlanningEntity;
import org.volcampanion.entity.PlanningId;

import java.util.List;

@ApplicationScoped
public class PlanningRepository implements PanacheRepositoryBase<PlanningEntity, PlanningId> {
    public List<PlanningEntity> findByConfId(Long confId) {
        return getEntityManager().createQuery("SELECT e FROM PlanningEntity e" +
                        " WHERE e.id.talk.conference.id = :confId " +
                        " ORDER BY e.id.schedule, e.id.room.id ASC", PlanningEntity.class)
                .setParameter("confId", confId)
                .getResultList();
    }

}
