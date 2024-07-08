package org.volcampanion.service;

import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.domain.TalkFormat;
import org.volcampanion.entity.TalkFormatEntity;
import org.volcampanion.entity.mappers.EntityTalkFormatMapper;
import org.volcampanion.repository.TalkFormatRepository;

@ApplicationScoped
public class TalkFormatService extends BaseService<TalkFormat, TalkFormatEntity> {

    TalkFormatService(EntityTalkFormatMapper mapper, TalkFormatRepository repository) {
        super(mapper, repository);
    }
}
