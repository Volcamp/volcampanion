package org.volcampanion.entity;

import io.hypersistence.utils.hibernate.type.interval.PostgreSQLIntervalType;
import lombok.Data;
import lombok.experimental.Accessors;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.time.Duration;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "talk_themes", schema = "volcampanion")
public class TalkThemeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

}
