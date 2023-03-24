package org.volcampanion.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.entity.RoomEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class RoomRepository implements PanacheRepository<RoomEntity> {
}
