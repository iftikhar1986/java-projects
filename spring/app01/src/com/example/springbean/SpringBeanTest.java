package com.example.springbean;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringBeanTest {

    public static void main(String[] args) {
        // Load the Spring application context from the XML configuration file
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the MyBean object from the Spring context
        MyBean myBean = (MyBean) context.getBean("myBean");

        // Print the message to the console
        System.out.println(myBean.getMessage());

        // Close the context to free resources
        ((ClassPathXmlApplicationContext) context).close();
    }
}
