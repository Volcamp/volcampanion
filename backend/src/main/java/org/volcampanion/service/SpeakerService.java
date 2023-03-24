package org.volcampanion.service;

import org.volcampanion.domain.Speaker;
import org.volcampanion.entity.SpeakerEntity;
import org.volcampanion.entity.mappers.SpeakerMapper;
import org.volcampanion.repository.SpeakerRepository;

import javax.inject.Singleton;

@Singleton
public class SpeakerService extends BaseService<Speaker, SpeakerEntity> {

    private SpeakerRepository repository;
    private SpeakerMapper mapper;

    SpeakerService(SpeakerMapper mapper, SpeakerRepository repository) {
        super(mapper, repository);
    }
}
