package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLifecycleTest {
    public static void main(String[] args) {
        // Load the Spring context from the XML configuration

    	
    	ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the bean from the Spring container
        MyBean myBean = (MyBean) context.getBean("myBean");

        // Use the bean
        myBean.showMessage();

        // Close the context to trigger the bean's destroy method
        ((ClassPathXmlApplicationContext) context).close();
    }
}
