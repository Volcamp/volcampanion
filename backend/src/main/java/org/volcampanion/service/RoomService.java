package org.volcampanion.service;


import org.volcampanion.domain.Room;
import org.volcampanion.entity.RoomEntity;
import org.volcampanion.entity.mappers.RoomMapper;
import org.volcampanion.repository.RoomRepository;

import javax.inject.Singleton;

@Singleton
public class RoomService extends BaseService<Room, RoomEntity> {

    private RoomRepository repository;
    private RoomMapper mapper;

    RoomService(RoomMapper mapper, RoomRepository repository) {
        super(mapper, repository);
    }


}
