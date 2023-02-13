package org.volcampanion.dto;

import lombok.Data;
import lombok.experimental.Accessors;
import org.volcampanion.util.UserRoles;

@Data
@Accessors(chain = true)
public class BasicUserDTO {
    private String email;
    private String password;
    private UserRoles role;
    private String twitter;
    private String biographie;
    private String nom;
    private String linkPhoto;
}
