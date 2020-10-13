package servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Parameter;
import java.util.Map;
@WebServlet("/controllerServlet")
public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("working...");
        try {
            System.out.println(req.getParameter("x"));
            System.out.println(req.getParameter("y"));
            System.out.println(req.getParameter("r"));
            double x = Double.parseDouble(req.getParameter("x"));
            double y =Double.parseDouble(req.getParameter("y"));
            double r = Double.parseDouble(req.getParameter("r"));
            if(x >= -3 && x <= 5 && y > -3 && y < 3 && r >= 1 && r <= 5) {
                getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
            }
            getServletContext().getRequestDispatcher("/areaCheckServlet").forward(req, resp);
        } catch (NumberFormatException | NullPointerException exception ){
            System.out.println("???");
            getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
        } catch (Exception e){
            System.out.println(e.getMessage()); PrintWriter writer = resp.getWriter();
            writer.write("error");
            writer.close();
        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println(123);
        getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);

    }
}
