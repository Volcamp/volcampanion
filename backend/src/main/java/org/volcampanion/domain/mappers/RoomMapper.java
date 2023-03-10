package org.volcampanion.domain.mappers;

import org.mapstruct.Mapper;
import org.volcampanion.domain.Room;
import org.volcampanion.dto.CreateRoomDTO;
import org.volcampanion.dto.RoomDTO;

import java.util.List;

@Mapper(componentModel = "cdi")
public interface RoomMapper {

    RoomDTO toDTO(Room domain);

    List<RoomDTO> toDTO(List<Room> domain);

    Room toDomain(RoomDTO dto);
    Room toDomain(CreateRoomDTO dto);

}
