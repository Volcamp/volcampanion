package org.volcampanion.reposistories;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entities.UserEntity;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class UserRepo implements PanacheRepository<UserEntity> {

    public List<UserEntity> findByNameLike(String name)
    {
        return find(String.format("nom like '%%%s%%'", name)).list();
    }
}
