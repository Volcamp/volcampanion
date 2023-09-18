package org.volcampanion.service;


import javax.inject.Singleton;
import org.volcampanion.domain.Room;
import org.volcampanion.entity.RoomEntity;
import org.volcampanion.entity.mappers.RoomMapper;
import org.volcampanion.repository.RoomRepository;

@Singleton
public class RoomService extends BaseService<Room, RoomEntity> {

    RoomService(RoomMapper mapper, RoomRepository repository) {
        super(mapper, repository);
    }


}
