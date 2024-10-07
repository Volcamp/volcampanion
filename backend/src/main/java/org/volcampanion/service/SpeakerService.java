package org.volcampanion.service;

import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.domain.Speaker;
import org.volcampanion.domain.SpeakerFilters;
import org.volcampanion.entity.SpeakerEntity;
import org.volcampanion.entity.mappers.EntitySpeakerMapper;
import org.volcampanion.repository.SpeakerRepository;

import java.util.List;

@ApplicationScoped
public class SpeakerService extends BaseService<Speaker, SpeakerEntity> {
    SpeakerService(EntitySpeakerMapper mapper, SpeakerRepository repository) {
        super(mapper, repository);
    }

    public List<Speaker> listWithFilters(SpeakerFilters filters) {
        return mapper.toDomain(((SpeakerRepository) repository).findByConfId(filters.getConferenceId()));
    }
}
