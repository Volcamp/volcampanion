package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.JAKARTA;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.Speaker;
import org.volcampanion.entity.SpeakerEntity;

@Mapper(componentModel = JAKARTA, uses = EntityConferenceMapper.class)
public interface EntitySpeakerMapper extends IMapper<Speaker, SpeakerEntity> {

    @Mapping(target = "talks", ignore = true)
    Speaker toDomain(SpeakerEntity entity);

    @InheritInverseConfiguration
    SpeakerEntity toEntity(Speaker domain);

    List<Speaker> toDomain(List<SpeakerEntity> entity);

    List<SpeakerEntity> toEntity(List<Speaker> domain);

}
