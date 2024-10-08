package org.volcampanion.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Accessors(chain = true)
@Table(name = "conferences", schema = "volcampanion")
public class ConferenceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(name = "start_date")
    private Date startDate;
    @Column(name = "end_date")
    private Date endDate;
    @Column(name = "is_active")
    private Boolean isActive;
    @OneToMany(mappedBy = "conference")
    private List<TalkEntity> talks = new ArrayList<>();

}
