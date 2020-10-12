
function checkJSON(str) {
    try {
        JSON.parse(str);
    } catch (exp) {
        return false;
    }
    return true;
}

function drawTable() {
    let table = $("#table_body")[0];
    if ((typeof Cookies.get("data") === 'string') && (checkJSON(Cookies.get('data')))) {
        let data = JSON.parse(Cookies.get("data"));
        let update = "";
        console.log(data.length);
        for (let i = data.length - 1; i >= 0; i--) {
            update += "<tr>"
            update += "<td>"
            update += data[i]['X']
            update += "</td>"
            update += "<td>"
            update += data[i]['Y']
            update += "</td>"
            update += "<td>"
            update += data[i]['R']
            update += "</td>"
            update += "<td>"
            update += data[i]['RESULT']
            update += "</td>"
            update += "<td>"
            update += data[i]['DATETIME']
            update += "</td>"
            update += "<td>"
            update += data[i]['COMPUTATION_TIME']
            update += "</td>"
            update += "</tr>"
        }
        table.innerHTML = update

    }
}


drawTable()