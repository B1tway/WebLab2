
<%--
  Created by IntelliJ IDEA.
  User: Bitway
  Date: 11.10.2020
  Time: 18:46
  To change this template use File | Settings | File Templates.
--%>
<?xml version="1.0" encoding="UTF-8"?>
<%@page contentType="application/xml" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<data>
    <table class="table table-warning">
        <thead>
        <tr>
            <th scope="col">X</th>
            <th scope="col">Y</th>
            <th scope="col">R</th>
            <th scope="col">Result</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="current" items="${storage}">
        <tr>
            <td> ${current.x}</td>
            <td> ${current.y}</td>
            <td> ${current.r}</td>
            <td> ${current.result ? "<div style=\"color: green\">OK</div>" :
                    "<div style=\"color: red\">Wrong</div>"} </td>
        </tr>
        </c:forEach>
        </tbody>
    </table>
</data>