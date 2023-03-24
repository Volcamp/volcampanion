package org.volcampanion.domain.mappers;

import org.mapstruct.Mapper;
import org.volcampanion.domain.Talk;
import org.volcampanion.dto.CreateTalkDTO;
import org.volcampanion.dto.TalkDTO;

import java.util.List;

@Mapper(componentModel = "cdi")
public interface TalkMapper {
    TalkDTO toDTO(Talk domain);

    List<TalkDTO> toDTO(List<Talk> domain);

    Talk toDomain(TalkDTO dto);

    Talk toDomain(CreateTalkDTO dto);

}
