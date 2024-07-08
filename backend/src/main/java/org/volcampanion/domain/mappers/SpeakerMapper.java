package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.JAKARTA;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.Speaker;
import org.volcampanion.dto.CreateSpeakerDTO;
import org.volcampanion.dto.SpeakerDTO;

@Mapper(componentModel = JAKARTA)
public interface SpeakerMapper {
    SpeakerDTO toDTO(Speaker domain);

    List<SpeakerDTO> toDTO(List<Speaker> domain);

    @Mapping(target = "conference", ignore = true)
    Speaker toDomain(SpeakerDTO dto);

    @Mapping(target = "conference", ignore = true)
    Speaker toDomain(CreateSpeakerDTO dto);

}
