package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entity.SpeakerEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class SpeakerRepository implements PanacheRepository<SpeakerEntity> {


}
