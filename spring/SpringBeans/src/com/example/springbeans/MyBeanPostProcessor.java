package com.example.springbeans;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;

public class MyBeanPostProcessor implements BeanPostProcessor {

    // Called before initialization (e.g., before the bean is fully initialized)
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("Before Initialization of Bean: " + beanName);
        return bean; // Return the bean as is
    }

    // Called after initialization (e.g., after the bean is fully initialized)
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) throws BeansException {
        System.out.println("After Initialization of Bean: " + beanName);
        return bean; // Return the bean as is
    }
}
