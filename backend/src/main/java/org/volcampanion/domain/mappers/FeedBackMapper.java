package org.volcampanion.domain.mappers;

import org.volcampanion.domain.FeedBack;
import org.volcampanion.dto.FeedbackDto;

import java.util.ArrayList;
import java.util.List;

public class FeedBackMapper {
    public static FeedbackDto domainToDto(FeedBack dom){
        FeedbackDto dto = new FeedbackDto();
//        dto.setId(dom.getId());
//        dto.setContent(dom.getContent());
//        dto.setUser( UserMapper.domainToDto(dom.getUser()));
//        dto.setTalk(TalkMapper.domainToDto(dom.getTalk()));
        return dto;
    }

    public static FeedBack dtoToDomain(FeedbackDto dto){
        FeedBack dom = new FeedBack();
        dom.setId(dto.getId());
        dom.setContent(dto.getContent());
//        dom.setTalk(TalkMapper.dtoToDomain(dto.getTalk()));
//        dom.setUser(UserMapper.dtoToDomain(dto.getUser()));
        return dom;
    }

    public static List<FeedbackDto> ListDomainToDTO(List<FeedBack> domList){
        List<FeedbackDto> dtosList = new ArrayList<>();
        for (FeedBack dom:domList
        ) {
            dtosList.add(domainToDto(dom));
        }
        return dtosList;
    }

    public static List<FeedBack> ListDtoToDomain(List<FeedbackDto> dtosList){
        List<FeedBack> domList = new ArrayList<>();
        for (FeedbackDto entity:dtosList
        ) {
            domList.add(dtoToDomain(entity));
        }
        return domList;
    }
}
