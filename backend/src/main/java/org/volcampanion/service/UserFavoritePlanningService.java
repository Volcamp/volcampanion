package org.volcampanion.service;

import org.volcampanion.domain.UserFavoritePlanning;
import org.volcampanion.entity.mappers.EntityUserFavoritePlanningMapper;
import org.volcampanion.repository.UserFavoritePlanningRepository;

import jakarta.inject.Inject;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class UserFavoritePlanningService {

    @Inject
    UserFavoritePlanningRepository repository;
    @Inject
    EntityUserFavoritePlanningMapper mapper;

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
