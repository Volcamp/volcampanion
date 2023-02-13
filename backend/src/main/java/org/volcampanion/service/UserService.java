package org.volcampanion.service;


import org.volcampanion.domain.User;
import org.volcampanion.entities.TalkEntity;
import org.volcampanion.entities.UserEntity;
import org.volcampanion.entities.mappers.UserMapper;
import org.volcampanion.reposistories.TalkRepo;
import org.volcampanion.reposistories.UserRepo;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.NotFoundException;
import java.util.List;

@ApplicationScoped
public class UserService {


    @Inject
    UserRepo repo;
    @Inject
    TalkRepo repoTalk;

    @Inject
    UserMapper userMapper;

    public List<User> getAll() {
        return userMapper.listEntityToDomain(repo.findAll().list());
    }

    public User getById(Long id) {
        return userMapper.entityToDomain(repo.findById(id));
    }


    public List<User> listByName(String searchedName) {
        //searchedName = "%" + searchedName + "%";
        return userMapper.listEntityToDomain(repo.findByNameLike(searchedName));
    }

    public boolean delete(Long id) {
        return repo.deleteById(id);
    }

    public void creatUser(User user) {
        repo.persist(userMapper.domainToEntity(user));
    }

    @Transactional
    public User updateUser(User newUser) {
        User oldUser = userMapper.entityToDomain(repo.findById(newUser.getId()));
        if (oldUser != null) {
            UserEntity entity = userMapper.domainToEntity(newUser);
            repo.getEntityManager().merge(entity);
            return userMapper.entityToDomain(entity);
        }
        throw new NotFoundException();
    }


    @Transactional
    public void addTalktoFav(Long talkId, Long userId) throws Exception {
        UserEntity user = repo.findById(userId);
        if (user == null) throw new NotFoundException("no user found with this ID");
        TalkEntity talk = repoTalk.findById(talkId);
        if (talk == null) throw new NotFoundException("no talk found with this ID");
        user.getFavTalks().add(talk);
        repo.getEntityManager().merge(user);
    }

    @Transactional
    public void associateSpeakerToTalk(Long speakerId, Long talkId) throws Exception {
        UserEntity user = repo.findById(speakerId);
        if (user == null) throw new NotFoundException("no user found with this ID");
        TalkEntity talk = repoTalk.findById(talkId);
        if (talk == null) throw new NotFoundException("no talk found with this ID");
        user.getSpeakTalks().add(talk);
        repo.getEntityManager().merge(user);
    }
}
