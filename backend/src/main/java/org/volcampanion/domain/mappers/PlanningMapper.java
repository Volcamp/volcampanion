package org.volcampanion.domain.mappers;

import org.mapstruct.Mapper;
import org.volcampanion.domain.Planning;
import org.volcampanion.dto.CreatePlanningDTO;
import org.volcampanion.dto.PlanningDTO;

import java.util.List;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

@Mapper(componentModel = CDI, uses = {
        RoomMapper.class,
        TalkMapper.class
})
public interface PlanningMapper {

    PlanningDTO toDTO(Planning domain);

    Planning toDomain(CreatePlanningDTO dto);
    Planning toDomain(PlanningDTO dto);

    List<PlanningDTO> toDTO(List<Planning> domain);

}
