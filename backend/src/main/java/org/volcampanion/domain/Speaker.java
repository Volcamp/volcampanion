package org.volcampanion.domain;

import java.util.ArrayList;
import java.util.List;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
public class Speaker extends IdentifiableDomain{
    private String name;
    private String email;
    private String twitter;
    private String linkedin;
    private String biography;
    private String company;
    private String photo;
    private List<Talk> talks = new ArrayList<>();
    private Conference conference;

}
