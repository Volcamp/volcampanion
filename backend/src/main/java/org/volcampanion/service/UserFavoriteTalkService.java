package org.volcampanion.service;

import org.volcampanion.domain.UserFavoriteTalk;
import org.volcampanion.entity.mappers.UserFavoriteTalkMapper;
import org.volcampanion.repository.UserFavoriteTalkRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class UserFavoriteTalkService {

    @Inject
    UserFavoriteTalkRepository repository;
    @Inject
    UserFavoriteTalkMapper mapper;

    public UserFavoriteTalk createOrUpdate(UserFavoriteTalk domain) {
        var entity = mapper.toEntity(domain);
        repository.persist(entity);
        repository.flush();
        return mapper.toDomain(entity);
    }

    public List<UserFavoriteTalk> listByUser(String email) {
        return mapper.toDomain(repository.list("id.userIdentifier", email));
    }

    public void delete(UserFavoriteTalk domain) {
        var entity = mapper.toEntity(domain);
        repository.deleteById(entity.getId());
    }
}
