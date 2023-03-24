package org.volcampanion.service;

import org.volcampanion.domain.Talk;
import org.volcampanion.entity.TalkEntity;
import org.volcampanion.entity.mappers.TalkMapper;
import org.volcampanion.repository.TalkRepository;

import javax.inject.Singleton;

@Singleton
public class TalkService extends BaseService<Talk, TalkEntity> {

    private TalkRepository repository;
    private TalkMapper mapper;

    TalkService(TalkMapper mapper, TalkRepository repository) {
        super(mapper, repository);
    }
}
