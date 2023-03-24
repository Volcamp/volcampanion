package org.volcampanion.service;

import org.volcampanion.domain.TalkTheme;
import org.volcampanion.entity.TalkThemeEntity;
import org.volcampanion.entity.mappers.TalkThemeMapper;
import org.volcampanion.repository.TalkThemeRepository;

import javax.inject.Singleton;

@Singleton
public class TalkThemeService extends BaseService<TalkTheme, TalkThemeEntity> {

    private TalkThemeRepository repository;
    private TalkThemeMapper mapper;

    TalkThemeService(TalkThemeMapper mapper, TalkThemeRepository repository) {
        super(mapper, repository);
    }
}
