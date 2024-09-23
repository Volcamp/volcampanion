package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.PlanningEntity;
import org.volcampanion.entity.SpeakerEntity;

import java.util.List;

@ApplicationScoped
public class SpeakerRepository implements PanacheRepository<SpeakerEntity> {

    public List<SpeakerEntity> findByConfId(Long confId) {
        return getEntityManager().createQuery("SELECT e FROM SpeakerEntity e" +
                        " WHERE e.conference.id = :confId", SpeakerEntity.class)
                .setParameter("confId", confId)
                .getResultList();
    }
}
