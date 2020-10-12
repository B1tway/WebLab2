

function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 10; // length of head in pixels
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);

    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.stroke();
}

function draw_coordinates(ctx) {
    let R = ctx.canvas.height / 4
    let R_text;
    try {
        R_text = getR();
    } catch (e) {
        R_text = '1'
    }
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;
    //Вертикальные черты
    ctx.fillText(-R_text / 2, Math.round((ctx.canvas.width / 2.05 + ctx.canvas.width / 40)), Math.round(ctx.canvas.height / 2 + R / 2 + 2))
    ctx.fillText(-R_text, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width / 40), Math.round(ctx.canvas.height / 2 + R + 2))
    ctx.fillText(R_text / 2, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width / 40), Math.round(ctx.canvas.height / 2 - R / 2 + 2))
    ctx.fillText(R_text, Math.round(ctx.canvas.width / 2.05 + ctx.canvas.width / 40), Math.round(ctx.canvas.height / 2 - R + 2))
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 + R / 2)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 + R / 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 + R)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 + R)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 - R / 2)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 - R / 2)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2.05, ctx.canvas.height / 2 - R)
    ctx.lineTo(ctx.canvas.width / 1.95, ctx.canvas.height / 2 - R)
    ctx.stroke()
    // Горизонтальные черты
    ctx.fillText(-R_text / 2, Math.round(ctx.canvas.width / 2 - R / 2 - 6), Math.round(ctx.canvas.height / 2.2))
    ctx.fillText(-R_text, Math.round(ctx.canvas.width / 2 - R - 3), Math.round(ctx.canvas.height / 2.2))
    ctx.fillText(R_text / 2, Math.round(ctx.canvas.width / 2 + R / 2 - 6), Math.round(ctx.canvas.height / 2.2))
    ctx.fillText(R_text, Math.round(ctx.canvas.width / 2 + R - 3), Math.round(ctx.canvas.height / 2.2))
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 - R / 2, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 - R / 2, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 - R, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 - R, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 + R / 2, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 + R / 2, ctx.canvas.height / 1.9)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(ctx.canvas.width / 2 + R, ctx.canvas.height / 2.1)
    ctx.lineTo(ctx.canvas.width / 2 + R, ctx.canvas.height / 1.9)
    ctx.stroke()
    // Стрелки

    canvas_arrow(ctx, ctx.canvas.width * 0.1, ctx.canvas.height / 2, ctx.canvas.width * 0.9, ctx.canvas.height / 2)
    ctx.fillText('X', ctx.canvas.width * 0.9, ctx.canvas.height / 2.1)
    canvas_arrow(ctx, ctx.canvas.width / 2, ctx.canvas.height * 0.9, ctx.canvas.width / 2, ctx.canvas.height * 0.1)
    ctx.fillText('Y', ctx.canvas.width / 2.2, ctx.canvas.height * 0.1)
}


function draw_canvas() {
    let context = $('#canvas')[0].getContext('2d')

    if (context) {
        let R = context.canvas.height / 4
        context.font = '10px verdana';
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        // Сектор
        context.beginPath();
        context.moveTo(context.canvas.width / 2, context.canvas.height / 2);
        context.arc(context.canvas.width / 2, context.canvas.height / 2, R, -Math.PI / 2, -Math.PI, true);
        context.closePath();
        context.strokeStyle = "rgb(226,204,34)";
        context.fillStyle = "rgb(226,204,34)";
        context.fill();
        context.stroke();

        // Прямоугольник
        context.fillRect(context.canvas.width / 2, context.canvas.height / 2, R, R)

        // Треугольник

        context.beginPath()
        context.moveTo(context.canvas.width / 2 - R, context.canvas.height / 2)
        context.lineTo(context.canvas.width / 2, context.canvas.height / 2 + R)
        context.lineTo(context.canvas.width / 2 + R, context.canvas.height / 2)
        context.lineTo(context.canvas.width / 2, context.canvas.height / 2)
        context.closePath()
        context.fill()
        context.stroke()

        // Рисуем координатные оси

        draw_coordinates(context);
        // draw_arrows(context);

    } else {
        alert("Update browser, plz")
    }
}

function drawPoint(x, y) {
    draw_canvas()
    let context = $('#canvas')[0].getContext('2d');
    let R = context.canvas.height / 4 / $("select")[0].value;
    let xx = context.canvas.width / 2 + R * x;
    let yy = context.canvas.height / 2 - R * y;
    console.log("xx: " + xx + " yy: " + yy);
    context.beginPath();
    context.moveTo(context.canvas.width / 2 + R * x, context.canvas.height / 2 - R * y);
    context.arc(context.canvas.width / 2 + R * x, context.canvas.height / 2 - R * y, context.canvas.width / 300, 0, 2 * Math.PI);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.fill();
    context.stroke();
}

function draw_current() {
    console.log("drawing point");
    drawPoint(getX(), getY());
}

function getCursorPosition(canvas, event) {
    let context = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    context.beginPath();

    let x = event.x - rect.left;
    let y = event.clientY - (rect.top);

    console.log("x: " + x + " y: " + y);
    console.log("w: " + rect.left);
    console.log("c: " + (window.innerWidth - canvas.width) / 2);
    context.moveTo(x, y);
    context.arc(x, y, 1, 0, 2 * Math.PI);
    context.closePath();

    // let r = canvas.height / 4 / $("select")[0].value;
    // console.log("width: " + (event.clientX/ rect.left) + " height: " + (event.clientY /rect.right));
    // const x = (event.clientX - canvas.width/2) / r;
    // const y = -(event.clientY - canvas.height/2)/ r;

    //
}

$(window).resize(draw_canvas);
$(window).on("load", draw_canvas);
$("select").on("change", draw_canvas);

// Add event listener for `click` events.
$('#canvas').click(function (event) {
    const ctx = $("#canvas")[0].getContext('2d');
    try {
        let r_val = getR();
        let kR = (ctx.canvas.height / (4 * r_val));
        const rect = ctx.canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        let canvas_x = x / (2.16666666667);
        let canvas_y = y / (325/300)/ 2;
        console.log("cx " + canvas_x + " cy " + canvas_y);
        // context.moveTo(context.canvas.width / 2 + R * x, context.canvas.height / 2 - R * y);
        const real_x = (canvas_x - ctx.canvas.width / 2) / kR;
        const real_y = (ctx.canvas.height / 2 - canvas_y) / kR;
        console.log("x " + real_x + " y " + real_y);
        drawPoint(real_x,real_y);
        $('#inv_x').val(real_x);
        $('#inv_y').val(real_y);
        $('#inv_r').val(r_val);
        $.get('controllerServlet', $('#inv').serialize(), function (responseXml) {
                $("#table_block").html($(responseXml).find("data").html());
            }
        );
    } catch (e) {
        alert("Невозможно определить координаты точки")
    }
});