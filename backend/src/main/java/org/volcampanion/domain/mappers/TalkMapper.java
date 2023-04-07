package org.volcampanion.domain.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import org.mapstruct.Mapper;
import org.volcampanion.domain.Talk;
import org.volcampanion.dto.CreateTalkDTO;
import org.volcampanion.dto.TalkDTO;

import java.util.List;

@Mapper(componentModel = CDI)
public interface TalkMapper {
    TalkDTO toDTO(Talk domain);

    List<TalkDTO> toDTO(List<Talk> domain);

    Talk toDomain(TalkDTO dto);

    Talk toDomain(CreateTalkDTO dto);

}
