package com.example.ioc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringIoCTest {

    public static void main(String[] args) {

        // Load the Spring configuration file (applicationContext.xml) to initialize the IoC container
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the Car bean from the IoC container
        Car car = (Car) context.getBean("car");

        // Call the drive method of the Car (which will start the engine and drive the car)
        car.drive();
    }
}
