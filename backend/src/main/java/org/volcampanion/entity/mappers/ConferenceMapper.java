package org.volcampanion.entity.mappers;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.Conference;
import org.volcampanion.entity.ConferenceEntity;

import java.util.List;

@Mapper(componentModel = "cdi")
public interface ConferenceMapper extends IMapper<Conference, ConferenceEntity> {

    @Mapping(target = "talks", ignore = true)
    Conference toDomain(ConferenceEntity entity);

    @Mapping(target = "talks", ignore = true)
    ConferenceEntity toEntity(Conference domain);

    List<Conference> toDomain(List<ConferenceEntity> entity);

    List<ConferenceEntity> toEntity(List<Conference> domain);

}
