package org.volcampanion.entity;

import io.hypersistence.utils.hibernate.type.interval.PostgreSQLIntervalType;
import java.time.Duration;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;
import lombok.experimental.Accessors;
import org.hibernate.annotations.TypeDef;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "talk_formats", schema = "volcampanion")
@TypeDef(typeClass = PostgreSQLIntervalType.class, defaultForType = Duration.class)
public class TalkFormatEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    @Column(
            name = "duration",
            columnDefinition = "interval"
    )
    private Duration duration;

}
