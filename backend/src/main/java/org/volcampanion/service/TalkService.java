package org.volcampanion.service;

import jakarta.enterprise.context.ApplicationScoped;
import org.apache.commons.lang3.StringUtils;
import org.volcampanion.domain.Talk;
import org.volcampanion.domain.TalkFilters;
import org.volcampanion.entity.TalkEntity;
import org.volcampanion.entity.mappers.EntityTalkMapper;
import org.volcampanion.repository.TalkRepository;

import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class TalkService extends BaseService<Talk, TalkEntity> {

    private static final String BASE_QUERY = "conference.id = ?1 ";

    TalkService(EntityTalkMapper mapper, TalkRepository repository) {
        super(mapper, repository);
    }

    public List<Talk> listWithFilters(TalkFilters filters) {
        var queryParams = new ArrayList<>();
        var query = new StringBuilder(BASE_QUERY);
        queryParams.add(filters.getConferenceId());

        if (StringUtils.isNotBlank(filters.getUserIdentifier())) {
            query.append(" and favorites.id.userIdentifier = ?2");
            queryParams.add(filters.getUserIdentifier());
        }

        return mapper.toDomain(repository.list(query.toString(), queryParams));
    }
}
