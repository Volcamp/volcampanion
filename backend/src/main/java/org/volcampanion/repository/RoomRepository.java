package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.entity.RoomEntity;

@ApplicationScoped
public class RoomRepository implements PanacheRepository<RoomEntity> {
}
