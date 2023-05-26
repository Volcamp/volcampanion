package org.volcampanion.service;

import org.volcampanion.domain.UserFavoritePlanning;
import org.volcampanion.entity.mappers.UserFavoritePlanningMapper;
import org.volcampanion.repository.UserFavoritePlanningRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class UserFavoritePlanningService {

    @Inject
    UserFavoritePlanningRepository repository;
    @Inject
    UserFavoritePlanningMapper mapper;

    public UserFavoritePlanning createOrUpdate(UserFavoritePlanning domain) {
        var entity = mapper.toEntity(domain);
        repository.persist(entity);
        repository.flush();

        return mapper.toDomain(entity);
    }

    public UserFavoritePlanning findById(UserFavoritePlanning domain) {
        var planning = repository.findById(mapper.toEntity(domain).getId());
        return mapper.toDomain(planning);
    }

    public List<UserFavoritePlanning> listByUser(String email) {
        return mapper.toDomain(repository.list("id.userIdentifier", email));
    }

    public void delete(UserFavoritePlanning domain) {
        var entity = mapper.toEntity(domain);
        repository.deleteById(entity.getId());
    }
}
