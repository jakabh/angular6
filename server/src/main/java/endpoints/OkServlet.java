package endpoints;

import java.io.IOException;
import java.io.PrintWriter;

@javax.servlet.annotation.WebServlet(
        name = "OkServlet",
        urlPatterns = {"/ok"})
public class OkServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        PrintWriter writer = response.getWriter();
        writer.println("<h1>Gotcha!!</h1>");

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        PrintWriter writer = response.getWriter();
        writer.println("<h1>Gotcha!!</h1>");

    }
}
