package org.volcampanion.service;


import org.volcampanion.domain.Room;
import org.volcampanion.entities.RoomEntity;
import org.volcampanion.entities.mappers.RoomMapper;
import org.volcampanion.reposistories.RoomRepository;

import javax.inject.Singleton;

@Singleton
public class RoomService extends BaseService<Room, RoomEntity> {

    private RoomRepository repository;
    private RoomMapper mapper;

    RoomService(RoomMapper mapper, RoomRepository repository) {
        super(mapper, repository);
    }


}
