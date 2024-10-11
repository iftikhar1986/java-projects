package com.example.springbeans;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringBeanTest {

    public static void main(String[] args) {
        // Load the Spring configuration file
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the Car bean
        Car car = (Car) context.getBean("car");
        car.drive(); // Start the engine and drive the car

        // Get the Truck bean (prototype scope)
        Truck truck = (Truck) context.getBean("truck");
        truck.drive(); // Start the engine and drive the truck with capacity

        // Note the BeanPostProcessor will automatically log the lifecycle of beans
    }
}
