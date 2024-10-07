package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.JAKARTA;

import java.util.List;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.volcampanion.domain.Talk;
import org.volcampanion.entity.TalkEntity;

@Mapper(componentModel = JAKARTA,
    uses = {
        EntityTalkFormatMapper.class,
        EntityTalkThemeMapper.class,
        EntitySpeakerMapper.class,
        EntityConferenceMapper.class
    })
public interface EntityTalkMapper extends IMapper<Talk, TalkEntity> {

  Talk toDomain(TalkEntity entity);

  @InheritInverseConfiguration
  TalkEntity toEntity(Talk domain);

  List<Talk> toDomain(List<TalkEntity> entity);

  List<TalkEntity> toEntity(List<Talk> domain);

}
