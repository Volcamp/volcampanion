package org.volcampanion.service;

import io.quarkus.panache.common.Sort;
import org.volcampanion.domain.Planning;
import org.volcampanion.domain.PlanningFilters;
import org.volcampanion.entity.PlanningEntity;
import org.volcampanion.entity.mappers.EntityPlanningMapper;
import org.volcampanion.repository.PlanningRepository;

import jakarta.inject.Inject;
import jakarta.enterprise.context.ApplicationScoped;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class PlanningService {
    private static final String BASE_QUERY = "id.talk.conference.id = ?1 ";

    private static final Sort SORT_ORDER = Sort.ascending("schedule, id.room.id");

    @Inject
    PlanningRepository repository;
    @Inject
    EntityPlanningMapper mapper;

    public Planning createOrUpdate(Planning domain) {
        var entity = mapper.toEntity(domain);
        repository.persistAndFlush(entity);
        return mapper.toDomain(entity);
    }

    public List<Planning> list() {
        return mapper.toDomain(repository.listAll(SORT_ORDER));
    }

    public List<Planning> listByRoom(long room) {
        return mapper.toDomain(repository.list("id.room.id", SORT_ORDER, room));
    }

    public List<Planning> listByTalk(long talk) {
        return mapper.toDomain(repository.list("id.talk.id", SORT_ORDER, talk));
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

    public List<Planning> listWithFilters(PlanningFilters filters) {
        var queryParams = new ArrayList<>();
        var query = new StringBuilder(BASE_QUERY);
        queryParams.add(filters.getConferenceId());

        return mapper.toDomain(repository.list(query.toString(), SORT_ORDER, queryParams));
    }
}
