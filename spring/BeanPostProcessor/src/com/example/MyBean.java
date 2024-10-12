package com.example;

public class MyBean {
    private String message;

    // Setter and Getter for message
    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void displayMessage() {
        System.out.println("Message: " + message);
    }
}
