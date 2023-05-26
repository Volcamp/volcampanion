package org.volcampanion.domain;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class UserFavoritePlanning {

    private String userIdentifier;

    private Planning planning;
}
