package endpoints;

import com.fasterxml.jackson.databind.ObjectMapper;
import models.UserData;
import services.UserDataDAO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/teszt")
public class TesztServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if (username != null && password != null ) {
            System.out.println("received: " + username + password);
            UserDataDAO userDAO = new UserDataDAO();
            ObjectMapper mapper = new ObjectMapper();
            UserData userData = userDAO.getUserData(username);
            if ( userData != null && userData.getPassword().equals(password)) {
                out.println(mapper.writeValueAsString(new Boolean(true)));
            } else {
                out.println(mapper.writeValueAsString(new Boolean(false)));
            }
        }else{
            //send bad request
          response.sendError(400);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println(request.getParameter("dummyParam"));
        System.out.println("newattr:"+request.getAttribute("newattribute"));
        PrintWriter out = response.getWriter();
        response.setContentType("application/json");
        ObjectMapper mapper = new ObjectMapper();
        UserData user = new UserData();
        user.setUserName("alma");
        user.setPassword("korte");
        user.setImageUrl("barack");
        UserDataDAO userDAO = new UserDataDAO();
        UserData[] allUsers = userDAO.getAllUsers();
        String jsonResponse = mapper.writeValueAsString(allUsers);
        System.out.println(jsonResponse);
        out.println(jsonResponse);

    }

}
