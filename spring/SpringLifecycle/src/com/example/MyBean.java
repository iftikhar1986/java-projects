package com.example;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class MyBean implements InitializingBean, DisposableBean {

    private String message;

    // Constructor
    public MyBean() {
        System.out.println("MyBean: Constructor called");
    }

    // Setter for message property
    public void setMessage(String message) {
        this.message = message;
    }

    // Method to display the message
    public void showMessage() {
        System.out.println("MyBean: Message = " + message);
    }

    // Custom initialization method (called by Spring during bean initialization)
    public void initMethod() {
        System.out.println("MyBean: Custom initMethod() called");
    }

    // Custom destroy method (called by Spring during bean destruction)
    public void destroyMethod() {
        System.out.println("MyBean: Custom destroyMethod() called");
    }

    // InitializingBean interface method implementation
    @Override
    public void afterPropertiesSet() throws Exception {
        // This method will be called after the bean's properties have been set
        System.out.println("MyBean: InitializingBean's afterPropertiesSet() called");
    }

    // DisposableBean interface method implementation
    @Override
    public void destroy() throws Exception {
        // This method will be called when the bean is being destroyed by the Spring container
        System.out.println("MyBean: DisposableBean's destroy() called");
    }
}
