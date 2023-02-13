package org.volcampanion.reposistories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entities.ConferenceEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ConferenceRepo implements PanacheRepository<ConferenceEntity> {


}
