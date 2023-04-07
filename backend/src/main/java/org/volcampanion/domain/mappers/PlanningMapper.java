package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.Planning;
import org.volcampanion.dto.PlanningDTO;

@Mapper(componentModel = CDI)
public interface PlanningMapper {

  @Mapping(target = "room", source = "room.id")
  @Mapping(target = "talk", source = "talk.id")
  @Mapping(target = "schedule", source = "schedule")
  PlanningDTO toDTO(Planning domain);

  @InheritInverseConfiguration
  Planning toDomain(PlanningDTO dto);

  List<PlanningDTO> toDTO(List<Planning> domain);

}
