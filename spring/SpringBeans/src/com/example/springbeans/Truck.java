package com.example.springbeans;

// Truck inherits from Car
public class Truck extends Car {

    private int capacity;

    // Constructor to initialize engine and capacity
    public Truck(Engine engine, int capacity) {
        super(engine); // Calls the parent Car class constructor
        this.capacity = capacity;
    }

    // Getter for the capacity
    public int getCapacity() {
        return capacity;
    }

    // Setter for the capacity
    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    // Method to simulate driving the truck
    @Override
    public void drive() {
        super.drive(); // Calls the parent drive method
        System.out.println("Truck is driving with capacity: " + capacity + " tons.");
    }
}
