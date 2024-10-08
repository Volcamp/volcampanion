package org.volcampanion.entity.mappers;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.UserFeedbackTalk;
import org.volcampanion.entity.UserFeedbackTalkEntity;

import java.util.List;

import static org.mapstruct.MappingConstants.ComponentModel.JAKARTA;

@Mapper(componentModel = JAKARTA,
        uses = {
                EntityTalkMapper.class,
        })
public interface EntityUserFeedbackTalkMapper extends IMapper<UserFeedbackTalk, UserFeedbackTalkEntity> {
    @Mapping(target = "userIdentifier")
    @Mapping(target = "talk")
    UserFeedbackTalk toDomain(UserFeedbackTalkEntity entity);

    @InheritInverseConfiguration
    UserFeedbackTalkEntity toEntity(UserFeedbackTalk domain);

    List<UserFeedbackTalk> toDomain(List<UserFeedbackTalkEntity> entity);

    List<UserFeedbackTalkEntity> toEntity(List<UserFeedbackTalk> domain);
}
