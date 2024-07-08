package org.volcampanion.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

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
