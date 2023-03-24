package org.volcampanion.domain.mappers;

import org.mapstruct.Mapper;
import org.volcampanion.domain.TalkFormat;
import org.volcampanion.dto.CreateTalkFormatDTO;
import org.volcampanion.dto.TalkFormatDTO;

import java.util.List;

@Mapper(componentModel = "cdi")
public interface TalkFormatMapper {
    TalkFormatDTO toDTO(TalkFormat domain);

    List<TalkFormatDTO> toDTO(List<TalkFormat> domain);

    TalkFormat toDomain(TalkFormatDTO dto);
    TalkFormat toDomain(CreateTalkFormatDTO dto);

}
