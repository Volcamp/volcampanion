package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.JAKARTA;

import java.util.List;
import org.mapstruct.Mapper;
import org.volcampanion.domain.TalkTheme;
import org.volcampanion.entity.TalkThemeEntity;

@Mapper(componentModel = JAKARTA)
public interface EntityTalkThemeMapper extends IMapper<TalkTheme, TalkThemeEntity> {

    TalkTheme toDomain(TalkThemeEntity entity);

    TalkThemeEntity toEntity(TalkTheme domain);

    List<TalkTheme> toDomain(List<TalkThemeEntity> entity);

    List<TalkThemeEntity> toEntity(List<TalkTheme> domain);

}
