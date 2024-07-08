package org.volcampanion.service;

import org.volcampanion.domain.Conference;
import org.volcampanion.entity.ConferenceEntity;
import org.volcampanion.entity.mappers.EntityConferenceMapper;
import org.volcampanion.repository.ConferenceRepository;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ConferenceService extends BaseService<Conference, ConferenceEntity> {

    ConferenceService(EntityConferenceMapper mapper, ConferenceRepository repository) {
        super(mapper, repository);
    }

    public Conference findActive() {
        return mapper.toDomain(repository.find("isActive", Boolean.TRUE)
                .list().stream()
                .findFirst()
                .orElse(null)
        );
    }
}
