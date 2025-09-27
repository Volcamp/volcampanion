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
                        " JOIN FETCH e.id.talk t" +
                        " JOIN FETCH e.id.room r" +
                        " JOIN FETCH t.theme" +
                        " JOIN FETCH t.format" +
                        " JOIN FETCH t.conference" +
                        " LEFT JOIN FETCH t.speakers" +
                        " WHERE t.conference.id = :confId " +
                        " ORDER BY e.id.schedule, r.id ASC", PlanningEntity.class)
                .setParameter("confId", confId)
                .getResultList();
    }

}
