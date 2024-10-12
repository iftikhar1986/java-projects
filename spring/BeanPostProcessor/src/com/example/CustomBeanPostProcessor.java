package com.example;

import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

@Component
public class CustomBeanPostProcessor implements BeanPostProcessor {

    // Called before the bean's initialization
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) {
        System.out.println("Before Initialization: " + beanName);
        if (bean instanceof MyBean) {
            MyBean myBean = (MyBean) bean;
            myBean.setMessage("Modified Before Initialization");
        }
        return bean;
    }

    // Called after the bean's initialization
    @Override
    public Object postProcessAfterInitialization(Object bean, String beanName) {
        System.out.println("After Initialization: " + beanName);
        if (bean instanceof MyBean) {
            MyBean myBean = (MyBean) bean;
            myBean.setMessage("Modified After Initialization");
        }
        return bean;
    }
}
