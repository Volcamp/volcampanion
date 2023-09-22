package org.volcampanion.service;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.panache.common.Parameters;
import org.volcampanion.domain.UserFeedbackTalk;
import org.volcampanion.entity.UserFeedbackTalkEntity;
import org.volcampanion.entity.mappers.IMapper;

import javax.inject.Singleton;
import java.util.ArrayList;
import java.util.List;

@Singleton
public class UserFeedbackTalkService extends BaseService<UserFeedbackTalk, UserFeedbackTalkEntity> {

    private static final String FIND_QUERY = "userIdentifier = :userIdentifier AND talk.id = :talkId";

    protected UserFeedbackTalkService(IMapper<UserFeedbackTalk, UserFeedbackTalkEntity> mapper, PanacheRepository<UserFeedbackTalkEntity> repository) {
        super(mapper, repository);
    }

    public List<UserFeedbackTalk> listByTalk(Long talkId) {
        return mapper.toDomain(repository.list("talk_id", talkId));
    }

    public void deleteByTalk(UserFeedbackTalk domain) {
        var queryParams = Parameters.with("userIdentifier", domain.getUserIdentifier())
                .and("talkId", domain.getTalk().getId());

        var existingFeedback = repository.find(FIND_QUERY, queryParams).firstResult();
        if (existingFeedback == null) {
            return;
        }
        repository.deleteById(existingFeedback.getId());
        repository.flush();
    }
}
