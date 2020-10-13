
function validateY(inp) {
    let val = parseFloat(inp.value.replace(',','.'))
    if (isNaN(val)){
        return false
    }
    return val < 3 && val > -3
}
function validateX() {
    let inp = $('input:checked').prop('value');
    console.log(inp);
    let val = parseFloat(inp);
    if(isNaN(inp)) {
        return false;
    }
    return val >= -3 && val <= 5;
}
function validateR() {
    let inp = getR();
    console.log(inp);
    let val = parseFloat(inp);
    if(isNaN(inp)) {
        return false;
    }
    return val >= 1 && val <= 5;
}

function validate() {
    $("#btn")[0].disabled = !(validateY($('#y')[0]) && validateX());

}
function getX() {
    let inp = $('input:checked').prop('value');
    console.log(inp);
    let val = parseFloat(inp);
    return val;
}
function getY() {
    let inp = $('#y')[0];
    let val = parseFloat(inp.value.replace(',','.'))
    if (isNaN(val)){
        return false
    }
    return val;
}
function getR() {
    let inp = $("select")[0].value;
    let val = parseFloat(inp);
    return val;
}
function setR(val) {
    $("select")[0] = val;
}