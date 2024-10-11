package com.example.springbeans;

public class Engine {

    private String type;

    // Constructor to set the engine type
    public Engine(String type) {
        this.type = type;
    }

    // Method to simulate starting the engine
    public void start() {
        System.out.println("Engine type: " + type + " is starting...");
    }
}
