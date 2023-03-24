package org.volcampanion.entities.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.Speaker;
import org.volcampanion.entities.SpeakerEntity;

import java.util.List;

@Mapper(componentModel = "cdi", uses = ConferenceMapper.class)
public interface SpeakerMapper extends IMapper<Speaker, SpeakerEntity> {

    Speaker toDomain(SpeakerEntity entity);

    @Mapping(target = "talks", ignore = true)
    SpeakerEntity toEntity(Speaker domain);

    List<Speaker> toDomain(List<SpeakerEntity> entity);

    List<SpeakerEntity> toEntity(List<Speaker> domain);

}
