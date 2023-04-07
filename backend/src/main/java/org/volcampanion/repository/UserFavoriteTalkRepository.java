package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;
import javax.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.UserFavoriteTalkEntity;
import org.volcampanion.entity.UserFavoriteTalkId;

@ApplicationScoped
public class UserFavoriteTalkRepository implements PanacheRepositoryBase<UserFavoriteTalkEntity, UserFavoriteTalkId> {
}
