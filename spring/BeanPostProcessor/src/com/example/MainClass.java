package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainClass {
    public static void main(String[] args) {
        // Load the Spring context from XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the MyBean bean from the Spring container
        MyBean myBean = (MyBean) context.getBean("myBean");

        // Display the message from MyBean
        myBean.displayMessage();  // Should show the message modified after initialization
    }
}
