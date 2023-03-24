package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entity.TalkEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TalkRepository implements PanacheRepository<TalkEntity> {
}
