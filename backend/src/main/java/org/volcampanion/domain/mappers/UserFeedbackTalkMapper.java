package org.volcampanion.domain.mappers;

import org.mapstruct.Mapper;
import org.volcampanion.domain.Talk;
import org.volcampanion.domain.UserFeedbackTalk;
import org.volcampanion.dto.UserFeedbackTalkDTO;

import java.util.List;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

@Mapper(componentModel = CDI)
public interface UserFeedbackTalkMapper {
    UserFeedbackTalkDTO toDTO(UserFeedbackTalk domain);

    List<UserFeedbackTalkDTO> toDTO(List<UserFeedbackTalk> domain);

    Talk toDomain(UserFeedbackTalkDTO dto);

    List<Talk> toDomain(List<UserFeedbackTalkDTO> dto);
}
