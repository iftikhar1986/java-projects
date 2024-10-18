<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JSP Declaration, Expression, and Scriptlet Tags</title>
    <style>
        /* Global styling */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }

        h1 {
            text-align: center;
            color: #4CAF50;
            margin-bottom: 30px;
        }

        .container {
            width: 80%;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin-top: 50px;
        }

        /* Styling the explanation section */
        .explanation {
            font-size: 1.2em;
            color: #333;
            margin-bottom: 20px;
        }

        ul {
            list-style: square;
            margin-left: 20px;
        }

        ul li {
            margin-bottom: 10px;
        }

        /* Fancy button styling */
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            margin-top: 20px;
        }

        .button:hover {
            background-color: #45a049;
        }

        /* Styling the result/output section */
        .result-box {
            background-color: #e0ffe0;
            border-left: 5px solid #4CAF50;
            padding: 15px;
            margin-bottom: 20px;
            font-size: 1.1em;
            color: #333;
            border-radius: 5px;
        }

        /* Footer section */
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 0.9em;
            color: #999;
        }

    </style>
</head>
<body>
    <div class="container">
        <h1>JSP Tags Example: Declaration, Expression, and Scriptlet</h1>

        <!-- Explanation of JSP Tags -->
        <div class="explanation">
            <p>
                In JSP, there are three important scripting elements:
            </p>
            <ul>
                <li><strong>Declaration Tag (&lt;%! %&gt;):</strong> Used to declare variables and methods, which can be used throughout the JSP page.</li>
                <li><strong>Expression Tag (&lt;%= %&gt;):</strong> Used to output values directly into the web page. The result of the expression is automatically added to the output stream.</li>
                <li><strong>Scriptlet Tag (&lt;% %&gt;):</strong> Used to embed Java code within the JSP page. The code inside the scriptlet executes every time the page is requested.</li>
            </ul>
        </div>

        <!-- Declaration Tag Example -->
        <%
            // Declaration tag is used to declare variables or methods
        %>
        <%! 
            int counter = 0; // Declaration of a variable
            public String getGreeting() {
                return "Welcome to JSP Scripting Elements!";
            }
        %>

        <!-- Scriptlet Tag Example -->
        <%
            // Scriptlet tag is used to write Java code that will be executed when the page is processed
            counter++;
        %>

        <!-- Output Section -->
        <div class="result-box">
            <!-- Expression Tag Example -->
            <p>
                This page has been accessed <strong><%= counter %></strong> time(s) during this session.
            </p>

            <!-- Expression Tag Example -->
            <p>
                <strong>Message:</strong> <%= getGreeting() %>
            </p>

            <!-- Displaying current date using Expression Tag -->
            <p>
                <strong>Today's date and time:</strong> <%= new java.util.Date() %>
            </p>
        </div>

        <!-- Fancy Button -->
        <a href="#" class="button">Click Me!</a>

    </div>

    <!-- Footer Section -->
    <div class="footer">
        &copy; 2024 JSP Example Page - All rights reserved.
    </div>
</body>
</html>
