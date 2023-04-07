package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.Mapper;
import org.volcampanion.domain.Talk;
import org.volcampanion.entity.TalkEntity;

@Mapper(componentModel = CDI,
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
