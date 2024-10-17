package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.GenericServlet;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class MyServletGenericServlet extends GenericServlet {

	@Override
	public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		   System.out.println("Service GenericServlet");
	        res.setContentType("text/html");
	        PrintWriter out =res.getWriter();
	        out.println("Wellcome to AI World GenericServlet");
		
	}

}
