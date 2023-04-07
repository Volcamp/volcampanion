package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.Mapper;
import org.volcampanion.domain.Conference;
import org.volcampanion.dto.ConferenceDTO;
import org.volcampanion.dto.CreateConferenceDTO;

@Mapper(componentModel = CDI)
public interface ConferenceMapper {
    ConferenceDTO toDTO(Conference domain);

    List<ConferenceDTO> toDTO(List<Conference> domain);

    Conference toDomain(ConferenceDTO dto);
    Conference toDomain(CreateConferenceDTO dto);

}
