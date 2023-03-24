package org.volcampanion.entity.mappers;

import org.mapstruct.Mapper;
import org.volcampanion.domain.Talk;
import org.volcampanion.entity.TalkEntity;

import java.util.List;

@Mapper(componentModel = "cdi",
        uses = {
                TalkFormatMapper.class,
                TalkThemeMapper.class,
                SpeakerMapper.class,
                ConferenceMapper.class
        })
public interface TalkMapper extends IMapper<Talk, TalkEntity> {

    Talk toDomain(TalkEntity entity);

    TalkEntity toEntity(Talk domain);

    List<Talk> toDomain(List<TalkEntity> entity);

    List<TalkEntity> toEntity(List<Talk> domain);

}
