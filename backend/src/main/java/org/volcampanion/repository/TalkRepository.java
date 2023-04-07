package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import javax.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.TalkEntity;

@ApplicationScoped
public class TalkRepository implements PanacheRepository<TalkEntity> {
}
