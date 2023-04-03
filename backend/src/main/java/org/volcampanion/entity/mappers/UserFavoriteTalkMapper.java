package org.volcampanion.entity.mappers;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.UserFavoriteTalk;
import org.volcampanion.entity.UserFavoriteTalkEntity;

import java.util.List;

@Mapper(componentModel = "cdi",
        uses = {
                TalkMapper.class,
        })
public interface UserFavoriteTalkMapper extends IMapper<UserFavoriteTalk, UserFavoriteTalkEntity> {

    @Mapping(target = "userIdentifier", source = "id.userIdentifier")
    @Mapping(target = "talk", source = "id.talk")
    UserFavoriteTalk toDomain(UserFavoriteTalkEntity entity);

    @InheritInverseConfiguration
    UserFavoriteTalkEntity toEntity(UserFavoriteTalk domain);

    List<UserFavoriteTalk> toDomain(List<UserFavoriteTalkEntity> entity);

    List<UserFavoriteTalkEntity> toEntity(List<UserFavoriteTalk> domain);

}
