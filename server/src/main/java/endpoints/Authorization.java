package endpoints;

import com.fasterxml.jackson.databind.ObjectMapper;
import jwt.JwtManager;
import models.UserData;
import services.UserDataDAO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.logging.Logger;

@WebServlet(name = "Authorization",
        urlPatterns = {"/authorize"})
public class Authorization extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if (username != null && password != null ) {
            UserDataDAO userDAO = new UserDataDAO();
            UserData userData = userDAO.getUserData(username);
            if ( userData != null && userData.getPassword().equals(password)) {
                response.getWriter().println(
                        "{ \"token\": \""+JwtManager.getInstance().createToken(username)+"\" }");
            } else {
                response.sendError(401);
            }
            }

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        Logger l = Logger.getLogger("Authorizer");
        Enumeration<String> headerNames = request.getHeaderNames();
        System.out.println("Headers received with the request: ");
        while( headerNames.hasMoreElements()){
            String headerName = headerNames.nextElement();
            System.out.println(headerName+": " +request.getHeader(headerName));
        }
        out.println("Everything OK!");

    }

}
