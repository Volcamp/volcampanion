package org.volcampanion.domain;

import java.util.Date;
import java.util.List;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class Conference extends IdentifiableDomain {
    private String name;
    private Date startDate;
    private Date endDate;
    private List<Talk> talks;

}

