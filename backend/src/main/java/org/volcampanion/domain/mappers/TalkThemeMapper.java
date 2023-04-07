package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import org.mapstruct.Mapper;
import org.volcampanion.domain.TalkTheme;
import org.volcampanion.dto.CreateTalkThemeDTO;
import org.volcampanion.dto.TalkThemeDTO;

import java.util.List;

@Mapper(componentModel = CDI)
public interface TalkThemeMapper {
    TalkThemeDTO toDTO(TalkTheme domain);

    List<TalkThemeDTO> toDTO(List<TalkTheme> domain);

    TalkTheme toDomain(TalkThemeDTO dto);

    TalkTheme toDomain(CreateTalkThemeDTO dto);

}
