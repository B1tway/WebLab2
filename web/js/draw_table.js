
function checkJSON(str) {
    try {
        JSON.parse(str);
    } catch (exp) {
        return false;
    }
    return true;
}
