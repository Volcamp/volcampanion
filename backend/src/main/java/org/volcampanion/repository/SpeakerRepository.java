package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.SpeakerEntity;

@ApplicationScoped
public class SpeakerRepository implements PanacheRepository<SpeakerEntity> {


}
