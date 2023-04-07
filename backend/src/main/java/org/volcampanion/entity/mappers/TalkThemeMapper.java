package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import org.mapstruct.Mapper;
import org.volcampanion.domain.TalkTheme;
import org.volcampanion.entity.TalkThemeEntity;

import java.util.List;

@Mapper(componentModel = CDI)
public interface TalkThemeMapper extends IMapper<TalkTheme, TalkThemeEntity> {

    TalkTheme toDomain(TalkThemeEntity entity);

    TalkThemeEntity toEntity(TalkTheme domain);

    List<TalkTheme> toDomain(List<TalkThemeEntity> entity);

    List<TalkThemeEntity> toEntity(List<TalkTheme> domain);

}
