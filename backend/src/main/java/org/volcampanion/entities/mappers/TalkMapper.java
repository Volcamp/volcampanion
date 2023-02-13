package org.volcampanion.entities.mappers;

import org.volcampanion.domain.Talk;
import org.volcampanion.domain.User;
import org.volcampanion.entities.ConferenceEntity;
import org.volcampanion.entities.TalkEntity;
import org.volcampanion.entities.UserEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class TalkMapper {
    @Inject
    ConferenceMapper confMapper;
    public Talk entityToDomain(TalkEntity entity) {
        Talk dom = new Talk();
        dom.setId(entity.getId());
        dom.setDate(entity.getDate());
        dom.setDescription(entity.getDescription());
        dom.setLangue(entity.getLangue());
        dom.setTitre(entity.getTitre());
        dom.setNomSalle(entity.getNomSalle());
        dom.setNiveau(entity.getNiveau());
        dom.setTheme(entity.getTheme());
        ConferenceEntity con= entity.getConfId();;
        dom.setConf_id(confMapper.entityToDomain(entity.getConfId()));
        dom.setSpeakers(new ArrayList<>());
        for (UserEntity speaker : entity.getSpeakers()) {
            dom.getSpeakers().add(new User()
                    .setId(speaker.getId())
                    .setBiographie(speaker.getBiographie())
                    .setLinkPhoto(speaker.getLinkPhoto())
                    .setNom(speaker.getNom())
                    .setEmail(speaker.getEmail())
                    .setTwitter(speaker.getTwitter())
            );
        }

        return dom;
    }

    public TalkEntity domainToEntity(Talk talk) {
        TalkEntity entity = new TalkEntity();
        entity.setId(talk.getId());
        entity.setDate(talk.getDate());
        entity.setDescription(talk.getDescription());
        entity.setLangue(talk.getLangue());
        entity.setTitre(talk.getTitre());
        entity.setNomSalle(talk.getNomSalle());
        entity.setNiveau(talk.getNiveau());
        entity.setTheme(talk.getTheme());
       entity.setConfId(confMapper.domainToEntity(talk.getConf_id()));
        return entity;
    }

    public List<Talk> listEntityToDomain(List<TalkEntity> talkEntityList) {
        List<Talk> talkList = new ArrayList<>();
        for (TalkEntity talkEntity : talkEntityList) {
            talkList.add(entityToDomain(talkEntity));
        }
        return talkList;
    }


    public List<TalkEntity> listDomainsToEntity(List<Talk> talkList) {
        List<TalkEntity> dtoList = new ArrayList<>();
        for (Talk talk : talkList) {
            dtoList.add(domainToEntity(talk));
        }
        return dtoList;
    }
}
