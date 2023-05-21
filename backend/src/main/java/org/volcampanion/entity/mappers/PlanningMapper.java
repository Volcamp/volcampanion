package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.Planning;
import org.volcampanion.entity.PlanningEntity;
import org.volcampanion.util.mapping.TimestampMapper;

@Mapper(componentModel = CDI,
    uses = {
        ConferenceMapper.class,
        RoomMapper.class,
        SpeakerMapper.class,
        TalkMapper.class,
        TalkFormatMapper.class,
        TalkThemeMapper.class,
        TimestampMapper.class
    }
)
public interface PlanningMapper extends IMapper<Planning, PlanningEntity> {

  @Mapping(target = "room", source = "id.room")
  @Mapping(target = "talk", source = "id.talk")
  @Mapping(target = "schedule", source = "id.schedule")
  Planning toDomain(PlanningEntity entity);

  @InheritInverseConfiguration
  PlanningEntity toEntity(Planning domain);

  List<Planning> toDomain(List<PlanningEntity> entity);

  List<PlanningEntity> toEntity(List<Planning> domain);

}
