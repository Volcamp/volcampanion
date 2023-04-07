package org.volcampanion.util.mapping;

import static org.mapstruct.MappingConstants.ComponentModel.CDI;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import org.mapstruct.Mapper;

@Mapper(componentModel = CDI)
public interface TimestampMapper {

  default LocalDateTime toLocalDateTime(Timestamp ts) {
    return ts == null ? null : ts.toLocalDateTime();
  }

  default Timestamp toTimestamp(LocalDateTime ts) {
    return ts == null ? null : Timestamp.valueOf(ts);
  }
}