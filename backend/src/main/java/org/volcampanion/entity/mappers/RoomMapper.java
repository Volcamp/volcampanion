package org.volcampanion.entity.mappers;


import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import org.mapstruct.Mapper;
import org.volcampanion.domain.Room;
import org.volcampanion.entity.RoomEntity;

import java.util.List;


@Mapper(componentModel = CDI, uses = ConferenceMapper.class)
public interface RoomMapper extends IMapper<Room, RoomEntity> {

    Room toDomain(RoomEntity entity);

    RoomEntity toEntity(Room domain);

    List<Room> toDomain(List<RoomEntity> entity);

    List<RoomEntity> toEntity(List<Room> domain);

}
