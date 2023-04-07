package org.volcampanion.service;

import javax.inject.Singleton;
import org.volcampanion.domain.TalkTheme;
import org.volcampanion.entity.TalkThemeEntity;
import org.volcampanion.entity.mappers.TalkThemeMapper;
import org.volcampanion.repository.TalkThemeRepository;

@Singleton
public class TalkThemeService extends BaseService<TalkTheme, TalkThemeEntity> {

    TalkThemeService(TalkThemeMapper mapper, TalkThemeRepository repository) {
        super(mapper, repository);
    }
}
