package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import javax.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.ConferenceEntity;

@ApplicationScoped
public class ConferenceRepository implements PanacheRepository<ConferenceEntity> {


}
