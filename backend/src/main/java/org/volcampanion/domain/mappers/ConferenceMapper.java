package org.volcampanion.domain.mappers;
import org.volcampanion.domain.Conference;
import org.volcampanion.dto.ConferenceDTO;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class ConferenceMapper {
    @Inject
    TalkMapper talkMapper;
    public Conference dtoToDomain(ConferenceDTO confDTO){
        Conference conf= new Conference();
       conf.setId(confDTO.getId());
        conf.setNom(confDTO.getNom());
        conf.setDebut(confDTO.getDateDebut());
        conf.setDateFin(confDTO.getDateFin());
//        conf.setTalk(talkMapper.listDtosToDomain(confDTO.getTalkDTO()));

        return conf;

    }

    public Conference dtoToDomainCreate(ConferenceDTO confDTO){
        Conference conf= new Conference();
        conf.setNom(confDTO.getNom());
        conf.setDebut(confDTO.getDateDebut());
        conf.setDateFin(confDTO.getDateFin());
       // conf.setTalk(talkMapper.listDtosToDomain(confDTO.getTalkDTO()));

        return conf;

    }

    public  ConferenceDTO domainToDTO(Conference conf){
        ConferenceDTO confDTO= new ConferenceDTO();
        confDTO.setId(conf.getId());
        confDTO.setNom(conf.getNom());
        confDTO.setDateDebut(conf.getDebut());
        confDTO.setDateFin(conf.getDateFin());
  //      confDTO.setTalkDTO(talkMapper.listDomainsToDto(conf.getTalk()));
        return confDTO;
    }

    public List<Conference> listDtosToDomain(List<ConferenceDTO> confDtoList){
        List<Conference> conferencesList = new ArrayList<>();
        for (ConferenceDTO ConfDto:confDtoList
        ) {
            conferencesList.add(dtoToDomain(ConfDto));
        }
        return conferencesList;
    }

    public  List<ConferenceDTO> listDomainToDto(List<Conference> confList){
        List<ConferenceDTO> dtoList = new ArrayList<>();
        for (Conference conf:confList
        ) {
            dtoList.add(domainToDTO(conf));
        }
        return dtoList;
    }


}
