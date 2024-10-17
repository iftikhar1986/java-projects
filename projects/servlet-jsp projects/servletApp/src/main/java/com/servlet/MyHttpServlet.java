package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyHttpServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		// TODO Auto-generated method stub
        System.out.println("Do Get Method ");

        res.setContentType("text/html");
        PrintWriter out =res.getWriter();
        
        
        out.println("Wellcome to AI World HTTP Servlet");

        
       
        }

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		 System.out.println("Do POST Method ");

	        resp.setContentType("text/html");
	        PrintWriter out =resp.getWriter();
	        
	        
	        out.println("Do POST Method");
	}

	
}
