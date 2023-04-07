package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import javax.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.TalkFormatEntity;

@ApplicationScoped
public class TalkFormatRepository implements PanacheRepository<TalkFormatEntity> {
}
