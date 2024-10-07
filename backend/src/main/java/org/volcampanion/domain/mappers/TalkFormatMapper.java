package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.JAKARTA;

import java.util.List;
import org.mapstruct.Mapper;
import org.volcampanion.domain.TalkFormat;
import org.volcampanion.dto.CreateTalkFormatDTO;
import org.volcampanion.dto.TalkFormatDTO;

@Mapper(componentModel = JAKARTA)
public interface TalkFormatMapper {
    TalkFormatDTO toDTO(TalkFormat domain);

    List<TalkFormatDTO> toDTO(List<TalkFormat> domain);

    TalkFormat toDomain(TalkFormatDTO dto);
    TalkFormat toDomain(CreateTalkFormatDTO dto);

}
