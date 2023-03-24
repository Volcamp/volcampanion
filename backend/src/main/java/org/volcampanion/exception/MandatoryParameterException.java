package org.volcampanion.exception;

public class MandatoryParameterException extends VolcampanionException {

    private static final String MESSAGE_TEMPLATE = "%s parameter is mandatory. Please refer to the documentation.";

    public MandatoryParameterException(String parameterName) {
        super(String.format(MESSAGE_TEMPLATE, parameterName));
    }
}
