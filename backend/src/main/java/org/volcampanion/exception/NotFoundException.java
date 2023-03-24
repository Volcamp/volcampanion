package org.volcampanion.exception;

import org.apache.commons.lang3.StringUtils;

public class NotFoundException extends VolcampanionException {

    public NotFoundException() {
        super(StringUtils.EMPTY);
    }
}
