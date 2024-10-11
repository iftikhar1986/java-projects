package com.example;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class Printer implements InitializingBean, DisposableBean {

    private String printerName;

    // Constructor
    public Printer() {
        System.out.println("Printer: Constructor called");
    }

    // Setter for printerName
    public void setPrinterName(String printerName) {
        this.printerName = printerName;
    }

    // Method to print a message
    public void printMessage(String message) {
        System.out.println("Printer: Printing message: " + message);
    }

    // Custom initialization method to simulate connecting to a printer
    public void connectPrinter() {
        System.out.println("Printer: Connecting to printer " + printerName);
    }

    // Custom destruction method to simulate disconnecting the printer
    public void disconnectPrinter() {
        System.out.println("Printer: Disconnecting from printer " + printerName);
    }

    // InitializingBean's afterPropertiesSet method (called after properties are set)
    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("Printer: InitializingBean's afterPropertiesSet() called");
    }

    // DisposableBean's destroy method (called before bean is destroyed)
    @Override
    public void destroy() throws Exception {
        System.out.println("Printer: DisposableBean's destroy() called");
    }
}
