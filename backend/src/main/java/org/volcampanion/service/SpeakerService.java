package org.volcampanion.service;

import org.volcampanion.domain.Speaker;
import org.volcampanion.entities.SpeakerEntity;
import org.volcampanion.entities.mappers.SpeakerMapper;
import org.volcampanion.reposistories.SpeakerRepository;

import javax.inject.Singleton;

@Singleton
public class SpeakerService extends BaseService<Speaker, SpeakerEntity> {

    private SpeakerRepository repository;
    private SpeakerMapper mapper;

    SpeakerService(SpeakerMapper mapper, SpeakerRepository repository) {
        super(mapper, repository);
    }
}
