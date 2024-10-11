package com.example.springbean;

public class MyBean {

    private String message;

    // Constructor
    public MyBean() {
        this.message = "Hello, this is your Spring Bean!";
    }

    // Getter for message
    public String getMessage() {
        return message;
    }

    // Setter for message
    public void setMessage(String message) {
        this.message = message;
    }
}
