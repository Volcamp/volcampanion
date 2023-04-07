package org.volcampanion.service;

import java.util.List;
import javax.inject.Inject;
import javax.inject.Singleton;
import org.volcampanion.domain.Planning;
import org.volcampanion.entity.PlanningEntity;
import org.volcampanion.entity.mappers.PlanningMapper;
import org.volcampanion.repository.PlanningRepository;

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
    return mapper.toDomain(repository.listAll());
  }

  public List<Planning> listByRoom(long room) {
    return mapper.toDomain(repository.list("id.room.id", room));
  }

  public List<Planning> listByTalk(long talk) {
    return mapper.toDomain(repository.list("id.talk.id", talk));
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
