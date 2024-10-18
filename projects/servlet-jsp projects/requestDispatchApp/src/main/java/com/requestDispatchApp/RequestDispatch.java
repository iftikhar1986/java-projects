package com.requestDispatchApp;



import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/login")
public class RequestDispatch extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // Hardcoded dummy credentials for testing
    private static final String DUMMY_EMAIL = "test@test.com";
    private static final String DUMMY_PASSWORD = "test";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {

        // Retrieve form data from the request
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // Dummy login validation
        if (DUMMY_EMAIL.equals(email) && DUMMY_PASSWORD.equals(password)) {
            // Successful login - forward to welcome page
            request.setAttribute("email", email);  // Pass email to the next page
            request.getRequestDispatcher("welcome.jsp").forward(request, response);
        } else {
            // Invalid login - redirect back to login form with an error message
            request.setAttribute("errorMessage", "Invalid email or password!");
            request.getRequestDispatcher("index.html").forward(request, response);
        }
    }
}

