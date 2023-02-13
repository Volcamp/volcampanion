package org.volcampanion.entities.mappers;

import org.volcampanion.domain.User;
import org.volcampanion.entities.UserEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class UserMapper {

    @Inject
    TalkMapper talkMapper;

    public UserEntity domainToEntity(User user) {
        UserEntity entity = new UserEntity();
        entity.setId(user.getId());
        entity.setEmail(user.getEmail());
        entity.setPassword(user.getPassword());
        entity.setNom(user.getNom());
        entity.setRole(user.getRole());
        entity.setBiographie(user.getBiographie());
        entity.setTwitter(user.getTwitter());
        entity.setLinkPhotos(user.getLinkPhoto());
        entity.setFavTalks(talkMapper.listDomainsToEntity(user.getFavTalks()));
        entity.setSpeakTalks(talkMapper.listDomainsToEntity(user.getSpeakTalks()));
        return entity;
    }

    public User entityToDomain(UserEntity entity) {
        if (entity == null) {
            return null;
        }
        User dom = new User();
        dom.setId(entity.getId());
        dom.setEmail(entity.getEmail());
        dom.setPassword(entity.getPassword());
        dom.setNom(entity.getNom());
        dom.setRole(entity.getRole());
        dom.setBiographie(entity.getBiographie());
        dom.setTwitter(entity.getTwitter());
        dom.setLinkPhoto(entity.getLinkPhoto());
        dom.setFavTalks(talkMapper.listEntityToDomain(entity.getFavTalks()));
        dom.setSpeakTalks(talkMapper.listEntityToDomain(entity.getSpeakTalks()));
        return dom;
    }

    public List<UserEntity> listDomainToEntity(List<User> users) {
        List<UserEntity> entityList = new ArrayList<>();
        for (User dom : users
        ) {
            entityList.add(domainToEntity(dom));
        }
        return entityList;
    }

    public List<User> listEntityToDomain(List<UserEntity> entityList) {
        List<User> users = new ArrayList<>();
        for (UserEntity entity : entityList
        ) {
            users.add(entityToDomain(entity));
        }
        return users;
    }
}
