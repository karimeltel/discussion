package com.discussion.exception;

public class ObjectNotFoundException extends RuntimeException {

    private static final long serialVersionUID = -681876864348817957L;

    public ObjectNotFoundException() {
        super();
    }

    public ObjectNotFoundException(String message) {
        super(message);
    }

    public ObjectNotFoundException(String message, Throwable e) {
        super(message, e);
    }
}
