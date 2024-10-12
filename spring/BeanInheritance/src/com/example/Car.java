package com.example;

public class Car extends Vehicle {
    private String carBrand;
    private String carModel;

    // Getters and setters
    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }

    // Method to display car details
    public void displayCarInfo() {
        System.out.println("Car Brand: " + carBrand);
        System.out.println("Car Model: " + carModel);
        System.out.println("Engine Type: " + getEngineType());
        System.out.println("Wheels: " + getWheels());
    }
}
