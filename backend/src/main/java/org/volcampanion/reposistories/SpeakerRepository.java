package org.volcampanion.reposistories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entities.SpeakerEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class SpeakerRepository implements PanacheRepository<SpeakerEntity> {


}
