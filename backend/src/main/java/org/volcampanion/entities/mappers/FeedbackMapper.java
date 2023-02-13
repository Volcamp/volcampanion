package org.volcampanion.entities.mappers;

import org.volcampanion.domain.FeedBack;
import org.volcampanion.entities.FeedBackEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class FeedbackMapper {

    @Inject
    UserMapper userMapper;

    @Inject
    TalkMapper talkMapper;

    public FeedBackEntity domainToEntity(FeedBack dom) {
        FeedBackEntity entity = new FeedBackEntity();
        entity.setId(dom.getId());
        entity.setContent(dom.getContent());
        entity.setUser(userMapper.domainToEntity(dom.getUser()));
        entity.setTalk(talkMapper.domainToEntity(dom.getTalk()));
        return entity;
    }

    public FeedBack entityToDomain(FeedBackEntity entity) {
        FeedBack dom = new FeedBack();
        dom.setId(entity.getId());
        dom.setContent(entity.getContent());
        dom.setTalk(talkMapper.entityToDomain(entity.getTalk()));
        dom.setUser(userMapper.entityToDomain(entity.getUser()));
        return dom;
    }

    public List<FeedBackEntity> listDomainToEntity(List<FeedBack> domList) {
        List<FeedBackEntity> entityList = new ArrayList<>();
        for (FeedBack dom : domList) {
            entityList.add(domainToEntity(dom));
        }
        return entityList;
    }

    public List<FeedBack> listEntityToDomain(List<FeedBackEntity> entityList) {
        List<FeedBack> domList = new ArrayList<>();
        for (FeedBackEntity entity : entityList) {
            domList.add(entityToDomain(entity));
        }
        return domList;
    }

}
