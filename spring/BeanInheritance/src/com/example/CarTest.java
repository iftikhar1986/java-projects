package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class CarTest {
    public static void main(String[] args) {
        // Load the Spring context from the XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the Car bean from the Spring container
        Car car = (Car) context.getBean("car");

        // Display car information
        car.displayCarInfo();
    }
}
