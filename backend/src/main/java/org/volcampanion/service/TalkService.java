package org.volcampanion.service;

import org.volcampanion.domain.Talk;
import org.volcampanion.entities.TalkEntity;
import org.volcampanion.entities.mappers.TalkMapper;
import org.volcampanion.reposistories.TalkRepo;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class TalkService {
    @Inject
    TalkRepo repo;

    @Inject
    TalkMapper talkMapper;

    public List<Talk> getAll() {
        return talkMapper.listEntityToDomain(repo.listAll());
    }

    public List<Talk> getByUser(Long userId) {
        //attention here to column and tabel names
        return talkMapper.listEntityToDomain(repo.list("from user_fav_talks where fk_user = ?", userId));
    }

    @Transactional
    public boolean delete(Long id) {
        return repo.deleteById(id);
    }

    public Talk getById(Long id) {
        return talkMapper.entityToDomain(repo.findById(id));
    }

    public boolean creatTalk(Talk talk) {
        repo.persistAndFlush(talkMapper.domainToEntity(talk));
        return repo.isPersistent(talkMapper.domainToEntity(talk));
    }

    @Transactional
    public void updateTalk(Talk newTalk) {
        Talk talk = talkMapper.entityToDomain(repo.findById(newTalk.getId()));
        if (talk != null) {
            TalkEntity entity = talkMapper.domainToEntity(newTalk);
            repo.getEntityManager().merge(entity);
        }
    }

    public List<Talk> listByTitle(String seartchString){
        return talkMapper.listEntityToDomain(
                repo.findByTitleLike(seartchString)
        );
    }


}
