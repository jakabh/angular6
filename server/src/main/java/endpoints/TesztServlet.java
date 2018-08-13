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
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println("username: " + username + " Password: " + password );
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
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
