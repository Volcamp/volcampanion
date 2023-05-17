package org.volcampanion.entity.mappers;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.UserFavoriteTalk;
import org.volcampanion.domain.UserFeedbackTalk;
import org.volcampanion.entity.UserFavoriteTalkEntity;
import org.volcampanion.entity.UserFeedbackTalkEntity;

import java.util.List;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

@Mapper(componentModel = CDI,
        uses = {
                TalkMapper.class,
        })
public interface UserFeedbackTalkMapper extends IMapper<UserFeedbackTalk, UserFeedbackTalkEntity> {
    @Mapping(target = "userIdentifier", source = "id.userIdentifier")
    @Mapping(target = "talk", source = "id.talk")
    UserFavoriteTalk toDomain(UserFavoriteTalkEntity entity);

    @InheritInverseConfiguration
    UserFeedbackTalkEntity toEntity(UserFavoriteTalk domain);

    List<UserFeedbackTalk> toDomain(List<UserFeedbackTalkEntity> entity);

    List<UserFeedbackTalkEntity> toEntity(List<UserFeedbackTalk> domain);
}
