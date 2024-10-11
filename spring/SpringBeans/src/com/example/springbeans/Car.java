package com.example.springbeans;

public class Car {

    // Fields
    private String brand;
    private Engine engine;

    // Constructor-based injection
    public Car(Engine engine) {
        this.engine = engine;
    }

    // Getter and setter for the brand
    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    // Method to simulate driving the car
    public void drive() {
        engine.start(); // Calls the Engine's start method
        System.out.println("Car is driving... Brand: " + brand);
    }
}
