package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.Conference;
import org.volcampanion.entity.ConferenceEntity;

@Mapper(componentModel = CDI)
public interface ConferenceMapper extends IMapper<Conference, ConferenceEntity> {

    @Mapping(target = "talks", ignore = true)
    Conference toDomain(ConferenceEntity entity);

    @Mapping(target = "talks", ignore = true)
    ConferenceEntity toEntity(Conference domain);

    List<Conference> toDomain(List<ConferenceEntity> entity);

    List<ConferenceEntity> toEntity(List<Conference> domain);

}
