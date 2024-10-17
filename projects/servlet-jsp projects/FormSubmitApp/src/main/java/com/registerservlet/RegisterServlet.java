 package com.registerservlet;
 
 

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegisterServlet extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		 // Set response content type
        resp.setContentType("text/html");
        
        // Retrieve form data from the request object
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String password = req.getParameter("password");
        String course = req.getParameter("course");
        
        // Simple response for testing purposes
        PrintWriter out = resp.getWriter();
        out.println("<html><body>");
        out.println("<h2>Registration Details</h2>");
        out.println("<p><strong>Name:</strong> " + name + "</p>");
        out.println("<p><strong>Email:</strong> " + email + "</p>");
        out.println("<p><strong>Password:</strong> " + password + "</p>");
        out.println("<p><strong>Course:</strong> " + course + "</p>");
        out.println("</body></html>");
        
        // Optionally, you can forward the request to a JSP page or another servlet
        // request.getRequestDispatcher("/success.jsp").forward(request, response);
	}

}
 