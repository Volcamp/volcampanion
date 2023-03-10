package org.volcampanion.service;

import org.volcampanion.domain.Conference;
import org.volcampanion.entities.ConferenceEntity;
import org.volcampanion.entities.mappers.ConferenceMapper;
import org.volcampanion.reposistories.ConferenceRepository;

import javax.inject.Singleton;

@Singleton
public class ConferenceService extends BaseService<Conference, ConferenceEntity> {

    private ConferenceRepository repository;
    private ConferenceMapper mapper;

    ConferenceService(ConferenceMapper mapper, ConferenceRepository repository){
        super(mapper, repository);
    }
}
