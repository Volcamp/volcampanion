package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import javax.enterprise.context.ApplicationScoped;

import org.volcampanion.entity.UserFavoritePlanningId;
import org.volcampanion.entity.UserFavoritePlanningEntity;

@ApplicationScoped
public class UserFavoritePlanningRepository implements PanacheRepositoryBase<UserFavoritePlanningEntity, UserFavoritePlanningId> {
}
