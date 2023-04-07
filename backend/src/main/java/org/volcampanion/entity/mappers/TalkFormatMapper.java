package org.volcampanion.entity.mappers;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.util.List;
import org.mapstruct.Mapper;
import org.volcampanion.domain.TalkFormat;
import org.volcampanion.entity.TalkFormatEntity;

@Mapper(componentModel = CDI)
public interface TalkFormatMapper extends IMapper<TalkFormat, TalkFormatEntity> {

    TalkFormat toDomain(TalkFormatEntity entity);

    TalkFormatEntity toEntity(TalkFormat domain);

    List<TalkFormat> toDomain(List<TalkFormatEntity> entity);

    List<TalkFormatEntity> toEntity(List<TalkFormat> domain);

}
