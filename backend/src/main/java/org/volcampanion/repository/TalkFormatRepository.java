package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entity.TalkFormatEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TalkFormatRepository implements PanacheRepository<TalkFormatEntity> {
}
