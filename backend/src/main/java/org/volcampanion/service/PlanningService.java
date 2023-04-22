package org.volcampanion.service;

import io.quarkus.panache.common.Sort;
import org.volcampanion.domain.Planning;
import org.volcampanion.entity.PlanningEntity;
import org.volcampanion.entity.mappers.PlanningMapper;
import org.volcampanion.repository.PlanningRepository;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.List;

@Singleton
public class PlanningService {

    @Inject
    PlanningRepository repository;
    @Inject
    PlanningMapper mapper;

    public Planning createOrUpdate(Planning domain) {
        var entity = mapper.toEntity(domain);
        repository.persistAndFlush(entity);
        return mapper.toDomain(entity);
    }

    public List<Planning> list() {
        return mapper.toDomain(repository.listAll(Sort.ascending("schedule")));
    }

    public List<Planning> listByRoom(long room) {
        return mapper.toDomain(repository.list("id.room.id", Sort.ascending("schedule"), room));
    }

    public List<Planning> listByTalk(long talk) {
        return mapper.toDomain(repository.list("id.talk.id", Sort.ascending("schedule"), talk));
    }

    public void delete(Planning domain) {
        var entity = mapper.toEntity(domain);
        repository.deleteById(entity.getId());
    }

    public Planning findById(Planning domain) {
        var entity = mapper.toEntity(domain);
        final PlanningEntity planning = repository.findById(entity.getId());
        return mapper.toDomain(planning);
    }
}
