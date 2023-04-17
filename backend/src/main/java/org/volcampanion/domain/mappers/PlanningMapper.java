package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.Mapper;
import org.volcampanion.domain.Planning;
import org.volcampanion.dto.PlanningDTO;

@Mapper(componentModel = CDI)
public interface PlanningMapper {

  PlanningDTO toDTO(Planning domain);

  Planning toDomain(PlanningDTO dto);

  List<PlanningDTO> toDTO(List<Planning> domain);

}
