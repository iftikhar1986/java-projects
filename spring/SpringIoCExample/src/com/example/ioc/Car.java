package com.example.ioc;

public class Car {

    // Field to store a reference to the Engine object (dependency)
    private Engine engine;

    // Constructor-based dependency injection
    public Car(Engine engine) {
        this.engine = engine; // Spring will inject the Engine object
    }

    // Method to simulate driving the car
    public void drive() {
        engine.start(); // Calls the Engine's start method
        System.out.println("Car is being driven.");
    }
}
