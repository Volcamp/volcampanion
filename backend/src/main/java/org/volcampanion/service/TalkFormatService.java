package org.volcampanion.service;

import javax.inject.Singleton;
import org.volcampanion.domain.TalkFormat;
import org.volcampanion.entity.TalkFormatEntity;
import org.volcampanion.entity.mappers.TalkFormatMapper;
import org.volcampanion.repository.TalkFormatRepository;

@Singleton
public class TalkFormatService extends BaseService<TalkFormat, TalkFormatEntity> {

    TalkFormatService(TalkFormatMapper mapper, TalkFormatRepository repository) {
        super(mapper, repository);
    }
}
