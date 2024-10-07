package org.volcampanion.service;

import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.domain.TalkTheme;
import org.volcampanion.entity.TalkThemeEntity;
import org.volcampanion.entity.mappers.EntityTalkThemeMapper;
import org.volcampanion.repository.TalkThemeRepository;

@ApplicationScoped
public class TalkThemeService extends BaseService<TalkTheme, TalkThemeEntity> {

    TalkThemeService(EntityTalkThemeMapper mapper, TalkThemeRepository repository) {
        super(mapper, repository);
    }
}
