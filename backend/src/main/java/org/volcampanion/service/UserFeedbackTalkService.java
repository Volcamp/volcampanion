package org.volcampanion.service;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.volcampanion.domain.UserFeedbackTalk;
import org.volcampanion.entity.UserFeedbackTalkEntity;
import org.volcampanion.entity.mappers.IMapper;

import javax.inject.Singleton;
import java.util.List;

@Singleton
public class UserFeedbackTalkService extends BaseService<UserFeedbackTalk, UserFeedbackTalkEntity> {

    protected UserFeedbackTalkService(IMapper<UserFeedbackTalk, UserFeedbackTalkEntity> mapper, PanacheRepository<UserFeedbackTalkEntity> repository) {
        super(mapper, repository);
    }

    public List<UserFeedbackTalk> listByTalk(Long talkId) {
        return mapper.toDomain(repository.list("id.talk", talkId));
    }

    public void deleteByTalk(UserFeedbackTalk domain) {
        var entity = mapper.toEntity(domain);
        repository.deleteById(entity.getId());
    }
}
