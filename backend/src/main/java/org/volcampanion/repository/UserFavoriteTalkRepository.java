package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import org.volcampanion.entity.UserFavoriteTalkEntity;
import org.volcampanion.entity.UserFavoriteTalkId;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserFavoriteTalkRepository implements PanacheRepositoryBase<UserFavoriteTalkEntity, UserFavoriteTalkId> {
}
