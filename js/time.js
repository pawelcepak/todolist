let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;

function appendZero(value) {
    return '0' + value;
}

function theTime() {
    let d = new Date();
    document.querySelector('#time').innerHTML = d.toLocaleTimeString("en-GB");
}

if (day < 10) {
    day = appendZero(day);
}

if (month < 10) {
    month = appendZero(month);
}

today = day + "/" + month + "/" + today.getFullYear();

document.querySelector("#time").innerHTML = today;

let myVar = setInterval(function () {
    theTime();
}, 1000);