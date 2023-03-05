package org.volcampanion.entities.mappers;

import java.util.List;

public interface IMapper<Domain, Entity> {

    Domain toDomain(Entity entity);

    Entity toEntity(Domain domain);


    List<Domain> toDomain(List<Entity> entity);

    List<Entity> toEntity(List<Domain> domain);
}
