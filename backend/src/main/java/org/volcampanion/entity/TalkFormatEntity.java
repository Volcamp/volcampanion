package org.volcampanion.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;
//import org.hibernate.annotations.TypeDef;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "talk_formats", schema = "volcampanion")
//@TypeDef(typeClass = PostgreSQLIntervalType.class, defaultForType = Duration.class)
public class TalkFormatEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    private String description;
    //    @Column(
//            name = "duration",
//            columnDefinition = "interval"
//    )
//    private Duration duration;
    private Integer duration;

}
