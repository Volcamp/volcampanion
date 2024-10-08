package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.TalkThemeEntity;

@ApplicationScoped
public class TalkThemeRepository implements PanacheRepository<TalkThemeEntity> {
}
