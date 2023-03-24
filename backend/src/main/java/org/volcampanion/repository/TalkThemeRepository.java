package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entity.TalkThemeEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TalkThemeRepository implements PanacheRepository<TalkThemeEntity> {
}
