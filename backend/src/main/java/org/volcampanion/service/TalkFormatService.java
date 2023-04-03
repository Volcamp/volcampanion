package org.volcampanion.service;

import org.volcampanion.domain.TalkFormat;
import org.volcampanion.entity.TalkFormatEntity;
import org.volcampanion.entity.mappers.TalkFormatMapper;
import org.volcampanion.repository.TalkFormatRepository;

import javax.inject.Singleton;

@Singleton
public class TalkFormatService extends BaseService<TalkFormat, TalkFormatEntity> {

    TalkFormatService(TalkFormatMapper mapper, TalkFormatRepository repository) {
        super(mapper, repository);
    }
}
