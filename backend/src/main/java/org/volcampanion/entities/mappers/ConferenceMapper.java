package org.volcampanion.entities.mappers;

import org.volcampanion.domain.Conference;
import org.volcampanion.entities.ConferenceEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class ConferenceMapper {

    @Inject
    ConferenceMapper confMapper;

    @Inject
    TalkMapper talkMapper;
    public  Conference entityToDomain(ConferenceEntity entity){
        Conference dom = new Conference();
        dom.setId(entity.getId());
        dom.setNom(entity.getNom());
        dom.setId(entity.getId());
        dom.setDebut(entity.getDateDebut());
        dom.setDateFin(entity.getDateFin());
       // talkMapper.listEntityToDomain(entity.getTalk());
//        dom.setTalk(talkMapper.listEntityToDomain(entity.getTalk()));
      /*  if(entity.getTalk()!=null){
            dom.setTalk(talkMapper.listEntityToDomain(entity.getTalk()));
        }*/
        //dom.setFavedByUsers(talkDto);
        return dom;
    }

    public  ConferenceEntity domainToEntity(Conference conf){
        ConferenceEntity entity = new ConferenceEntity();
        entity.setId(conf.getId());
        entity.setNom(conf.getNom());
        entity.setDateDebut(conf.getDebut());
        entity.setDateFin(conf.getDateFin());
        //entity.setTalk(talkMapper.listDomainsToEntity(conf.getTalk()));
        return entity;
    }

    public List<ConferenceEntity> listDomainToEntity(List<Conference> confs ){
        List<ConferenceEntity> entityList=new ArrayList<>();
        for (Conference dom : confs
        )
        {
            entityList.add(domainToEntity(dom));
        }
        return entityList;
    }

    public List<Conference> listEntityToDomain(List<ConferenceEntity> entityList){
        List<Conference> conferences=new ArrayList<>();
        for (ConferenceEntity entity:entityList
        ) {
            conferences.add(entityToDomain(entity));
        }
        return conferences;
    }


}
