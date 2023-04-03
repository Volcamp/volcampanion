package org.volcampanion.service;

import org.volcampanion.domain.Conference;
import org.volcampanion.entity.ConferenceEntity;
import org.volcampanion.entity.mappers.ConferenceMapper;
import org.volcampanion.repository.ConferenceRepository;

import javax.inject.Singleton;

@Singleton
public class ConferenceService extends BaseService<Conference, ConferenceEntity> {

    ConferenceService(ConferenceMapper mapper, ConferenceRepository repository) {
        super(mapper, repository);
    }
}
