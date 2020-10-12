<%--
  Created by IntelliJ IDEA.
  User: Bitway
  Date: 10.10.2020
  Time: 15:59
  To change this template use File | Settings | File Templates.
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
  <title>WebLab2</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <link rel="stylesheet" href="css/styles.css" type="text/css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossorigin="anonymous"></script>
</head>
<body>

<div class="container-fluid">
  <header class="navbar navbar-dark bg-warning">
    <a class="navbar-brand"> Лабораторная работа 2. Шукшов Андрей, P3211. Вариант : 4522</a>
  </header>
  <div id="#content" style="background: #9a25ff;">
    <div class="mx-auto col-xl-5">
      <canvas id="canvas"></canvas>
    </div>

    <form id="form" method="GET">
      <div class="form-row">
        <div class="col form-group label-header text-center" id="x-block">
          <label class="form-label " for="x-checkbox"><h4 class="font-weight-bold">input X [-3:5]</h4></label>
          <div id="x-checkbox">
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x1" name="x" value="-3" checked>
              <label class="form-check-label" for="x1">-3</label>
            </div>
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x2" name="x" value="-2">
              <label class="form-check-label" for="x2">-2</label>
            </div>
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x3" name="x" value="-1">
              <label class="form-check-label" for="x3">-1</label>
            </div>
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x4" name="x" value="0">
              <label class="form-check-label" for="x4">0 </label>
            </div>
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x5" name="x" value="1">
              <label class="form-check-label" for="x5">1</label>
            </div>
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x6" name="x" value="2">
              <label class="form-check-label" for="x6">2</label>
            </div>
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x7" name="x" value="3">
              <label class="form-check-label" for="x7">3</label>
            </div>
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x8" name="x" value="4">
              <label class="form-check-label" for="x8">4</label>
            </div>
            <div class="form-check form-check-inline ">
              <input class="form-check-input" type="checkbox" id="x9" name="x" value="5">
              <label class="form-check-label" for="x9">5</label>
            </div>
          </div>
        </div>
        <div class="col form-group label-header  text-center" id="y-block">
          <label class="form-label" for="y"><h4 class="font-weight-bold">input Y [-3:3]</h4></label>
          <input class="form-control" type="text" id="y" name="y" oninput="validate()" onchange="validate()">
        </div>
        <div class="col form-group label-header  text-center" id="r-block">
          <label class="form-label" for="R"><h4 class="font-weight-bold">input R [1:5]</h4></label>
          <select class="form-control" name="r" class="form-control" id="r">
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>


        </div>
      </div>
      <button type="button" id="btn" class="col btn btn-warning btn-lg btn-block" disabled>Submit</button>


    </form>
    <div id="table_block">
      <jsp:include page="answer.jsp"/>
    </div>

  </div>
</div>
<script src="js/request.js"></script>
<script src="js/draw_canvas.js"></script>
<script src="js/checkbox_validator.js"></script>
<script src="js/check.js"></script>
<%--<script src="js/draw_table.js"></script>--%>

</body>
</html>
