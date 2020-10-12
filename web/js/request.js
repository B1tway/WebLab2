// $(document).on("click", "#btn", function () {
//     draw_current();
//     console.log("sending...");
//     // When HTML DOM "click" event is invoked on element with ID "somebutton", execute the following function...
//     $.get("controllerServlet", function (responseXml) {                // Execute Ajax GET request on URL of "someservlet" and execute the following function with Ajax response XML...
//         $("#data").html($(responseXml).find("data").html()); // Parse XML, find <data> element and append its HTML to HTML DOM element with ID "somediv".
//     });
//     console.log("send");
// });
$('#btn').click(function () {
    $.get('controllerServlet', $('#form').serialize(), function (responseXml) {
            draw_current();
            $("#table_block").html($(responseXml).find("data").html());
        }
    );
});