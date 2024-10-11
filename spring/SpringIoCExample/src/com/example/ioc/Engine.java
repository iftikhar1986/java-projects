package com.example.ioc;

public class Engine {

    // Field to store the type of the engine
    private String type;

    // Constructor to initialize the engine type
    public Engine(String type) {
        this.type = type;
    }

    // Getter for the engine type
    public String getType() {
        return type;
    }

    // Setter for the engine type (optional, in case of setter injection)
    public void setType(String type) {
        this.type = type;
    }

    // Method to simulate starting the engine
    public void start() {
        System.out.println("Engine type: " + type + " is started.");
    }
}
