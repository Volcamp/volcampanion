package org.volcampanion.domain;

import lombok.Data;
import lombok.experimental.Accessors;
import org.volcampanion.util.UserRoles;

import java.util.ArrayList;
import java.util.List;

@Data
@Accessors(chain = true)
public class User {
    private Long id;
    private String email;
    private String password;
    private UserRoles role;
    private String twitter;
    private String biographie;
    private String nom;
    private String linkPhoto;
    private List<Talk> favTalks = new ArrayList<>();
    private List<Talk> speakTalks = new ArrayList<>();
}
