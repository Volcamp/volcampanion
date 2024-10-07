package org.volcampanion.service;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import java.util.List;
import org.volcampanion.domain.IdentifiableDomain;
import org.volcampanion.entity.mappers.IMapper;

public abstract class BaseService<Domain extends IdentifiableDomain, Entity> {

    protected IMapper<Domain, Entity> mapper;
    protected PanacheRepository<Entity> repository;

    protected BaseService(){
        //Do nothing
    }

    protected BaseService(IMapper<Domain, Entity> mapper, PanacheRepository<Entity> repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    public Domain createOrUpdate(Domain domain) {
        var entity = mapper.toEntity(domain);
        if (domain.getId() != null) {
            repository.getEntityManager().merge(entity);
        } else {
            repository.persist(entity);
        }
        repository.flush();
        return mapper.toDomain(entity);
    }

    public Domain findById(Long id) {
        return mapper.toDomain(repository.findById(id));
    }

    public List<Domain> list() {
        return mapper.toDomain(repository.listAll());
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }

}
