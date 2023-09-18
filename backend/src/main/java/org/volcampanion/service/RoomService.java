package org.volcampanion.service;


import org.volcampanion.domain.Room;
import org.volcampanion.domain.RoomFilters;
import org.volcampanion.domain.TalkFilters;
import org.volcampanion.entity.RoomEntity;
import org.volcampanion.entity.mappers.RoomMapper;
import org.volcampanion.repository.RoomRepository;

import javax.inject.Singleton;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class RoomService extends BaseService<Room, RoomEntity> {
    private static final String BASE_QUERY = "conference.id = ?1 ";

    RoomService(RoomMapper mapper, RoomRepository repository) {
        super(mapper, repository);
    }

    public List<Room> listWithFilters(RoomFilters filters) {
        var queryParams = new ArrayList<>();
        queryParams.add(filters.getConferenceId());

        return mapper.toDomain(repository.list(BASE_QUERY, queryParams));
    }

}
