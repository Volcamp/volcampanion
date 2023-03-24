package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entity.ConferenceEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ConferenceRepository implements PanacheRepository<ConferenceEntity> {


}
