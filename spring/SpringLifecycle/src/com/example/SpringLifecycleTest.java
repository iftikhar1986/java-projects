package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLifecycleTest {
    public static void main(String[] args) {
        // Load the Spring context from the XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the Printer bean from the Spring container
        Printer printer = (Printer) context.getBean("printer");

        // Use the printer bean to print a message
        printer.printMessage("Hello, Spring Lifecycle!");

        // Close the context to trigger the bean's destroy method
        ((ClassPathXmlApplicationContext) context).close();
    }
}
