package org.volcampanion.service;

import java.util.ArrayList;
import java.util.List;
import jakarta.enterprise.context.ApplicationScoped;
import org.volcampanion.domain.Speaker;
import org.volcampanion.domain.SpeakerFilters;
import org.volcampanion.entity.SpeakerEntity;
import org.volcampanion.entity.mappers.EntitySpeakerMapper;
import org.volcampanion.repository.SpeakerRepository;

@ApplicationScoped
public class SpeakerService extends BaseService<Speaker, SpeakerEntity> {
    private static final String BASE_QUERY = "conference.id = ?1 ";

    SpeakerService(EntitySpeakerMapper mapper, SpeakerRepository repository) {
        super(mapper, repository);
    }

    public List<Speaker> listWithFilters(SpeakerFilters filters) {
        var queryParams = new ArrayList<>();
        var query = new StringBuilder(BASE_QUERY);
        queryParams.add(filters.getConferenceId());

        return mapper.toDomain(repository.list(query.toString(), queryParams));
    }
}
