package org.volcampanion.domain.mappers;

import org.volcampanion.domain.Conference;
import org.volcampanion.domain.Talk;
import org.volcampanion.dto.TalkDto;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class TalkMapper {

    @Inject
    ConferenceMapper confMapper;
    @Inject
    EmbedUserDTOMapper embedUserDTOMapper;


    public Talk dtoToDomain(TalkDto talkDto) {
        Talk dom = new Talk();
        dom.setId(talkDto.getId());
        dom.setDate(talkDto.getDate());
        dom.setDescription(talkDto.getDescription());
        dom.setLangue(talkDto.getLangue());
        dom.setTitre(talkDto.getTitre());
        dom.setNomSalle(talkDto.getNomSalle());
        dom.setTheme(talkDto.getTheme());
        dom.setNiveau(talkDto.getNiveau());
        dom.setSpeakers(embedUserDTOMapper.listDtosToDomains(talkDto.getSpeakers()));
        dom.setConf_id(confMapper.dtoToDomain(talkDto.getConferenceDTO()));
        return dom;
    }

    public TalkDto domainToDto(Talk talk) {
        TalkDto dto = new TalkDto();
        dto.setId(talk.getId());
        dto.setDate(talk.getDate());
        dto.setDescription(talk.getDescription());
        dto.setLangue(talk.getLangue());
        dto.setTitre(talk.getTitre());
        dto.setNomSalle(talk.getNomSalle());
        dto.setTheme(talk.getTheme());
        dto.setNiveau(talk.getNiveau());
        dto.setSpeakers(embedUserDTOMapper.listDomainsToDtos(talk.getSpeakers()));
        Conference con= talk.getConf_id();;
        dto.setConferenceDTO(confMapper.domainToDTO(talk.getConf_id()));
        return dto;
    }

    public List<Talk> listDtosToDomain(List<TalkDto> talkDtoList) {
        List<Talk> talkList = new ArrayList<>();
        for (TalkDto talkDto : talkDtoList) {
            talkList.add(dtoToDomain(talkDto));
        }
        return talkList;
    }


    public List<TalkDto> listDomainsToDto(List<Talk> talkList) {
        List<TalkDto> dtoList = new ArrayList<>();
        for (Talk talk : talkList) {
            dtoList.add(domainToDto(talk));
        }
        return dtoList;
    }
}
