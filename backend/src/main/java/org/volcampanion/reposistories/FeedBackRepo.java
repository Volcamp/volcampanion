package org.volcampanion.reposistories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entities.FeedBackEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class FeedBackRepo implements PanacheRepository<FeedBackEntity> {
}
