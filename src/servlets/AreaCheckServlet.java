package servlets;

import models.QueryEntity;
import models.QueryStorage;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;

@WebServlet("/areaCheckServlet")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        System.out.println("i'm here");

        ServletContext context = getServletContext();
        ArrayList<QueryEntity> storage = (ArrayList<QueryEntity>) context.getAttribute("storage");
        storage = storage == null? storage = new ArrayList<QueryEntity>(): storage;
        Double x = Double.parseDouble(req.getParameter("x"));
        Double y = Double.parseDouble(req.getParameter("y"));
        Double r = Double.parseDouble(req.getParameter("r"));
        QueryEntity queryEntity = new QueryEntity(x, y, r);
        storage.add(queryEntity);
        System.out.println("size: " + storage.size());
        context.setAttribute("storage", storage);
        req.setAttribute("storage", storage);
        getServletContext().getRequestDispatcher("/index.jsp").forward(req, resp);
    }
}
