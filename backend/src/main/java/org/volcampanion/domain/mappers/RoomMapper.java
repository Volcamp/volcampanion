package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.Mapper;
import org.volcampanion.domain.Room;
import org.volcampanion.dto.CreateRoomDTO;
import org.volcampanion.dto.RoomDTO;

@Mapper(componentModel = CDI)
public interface RoomMapper {

    RoomDTO toDTO(Room domain);

    List<RoomDTO> toDTO(List<Room> domain);

    Room toDomain(RoomDTO dto);
    Room toDomain(CreateRoomDTO dto);

}
