package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.JAKARTA;

import java.util.List;
import org.mapstruct.Mapper;
import org.volcampanion.domain.TalkTheme;
import org.volcampanion.dto.CreateTalkThemeDTO;
import org.volcampanion.dto.TalkThemeDTO;

@Mapper(componentModel = JAKARTA)
public interface TalkThemeMapper {
    TalkThemeDTO toDTO(TalkTheme domain);

    List<TalkThemeDTO> toDTO(List<TalkTheme> domain);

    TalkTheme toDomain(TalkThemeDTO dto);

    TalkTheme toDomain(CreateTalkThemeDTO dto);

}
