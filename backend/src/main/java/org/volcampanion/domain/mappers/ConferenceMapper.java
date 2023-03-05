package org.volcampanion.domain.mappers;

import org.mapstruct.Mapper;
import org.volcampanion.domain.Conference;
import org.volcampanion.domain.Room;
import org.volcampanion.dto.ConferenceDTO;
import org.volcampanion.dto.CreateConferenceDTO;
import org.volcampanion.dto.CreateRoomDTO;
import org.volcampanion.dto.RoomDTO;

import java.util.List;

@Mapper(componentModel = "cdi")
public interface ConferenceMapper {
    ConferenceDTO toDTO(Conference domain);

    List<ConferenceDTO> toDTO(List<Conference> domain);

    Conference toDomain(ConferenceDTO dto);
    Conference toDomain(CreateConferenceDTO dto);

}
