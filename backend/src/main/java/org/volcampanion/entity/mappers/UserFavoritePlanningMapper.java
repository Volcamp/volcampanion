package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.volcampanion.domain.UserFavoritePlanning;
import org.volcampanion.entity.UserFavoritePlanningEntity;
import org.volcampanion.util.mapping.TimestampMapper;

@Mapper(componentModel = CDI,
        uses = {
                TalkMapper.class,
                TimestampMapper.class,
        })
public interface UserFavoritePlanningMapper extends IMapper<UserFavoritePlanning, UserFavoritePlanningEntity> {

    @Mapping(target = "userIdentifier", source = "id.userIdentifier")
    @Mapping(target = "planning.room" , source = "id.room")
    @Mapping(target = "planning.talk" , source = "id.talk")
    @Mapping(target = "planning.schedule" , source = "id.schedule")
    UserFavoritePlanning toDomain(UserFavoritePlanningEntity entity);

    @InheritInverseConfiguration
    UserFavoritePlanningEntity toEntity(UserFavoritePlanning domain);

    List<UserFavoritePlanning> toDomain(List<UserFavoritePlanningEntity> entity);

    List<UserFavoritePlanningEntity> toEntity(List<UserFavoritePlanning> domain);

}
