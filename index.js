const imgCont = document.getElementById('images-contect-id');

const btn1 = document.getElementById('btn1'),
    btn3 = document.getElementById('btn3'),
    btn4 = document.getElementById('btn4'),
    btn5 = document.getElementById('btn5');

btn1.onfocus = function() {
    imgCont.style.transform = "translate(0px)";
}

btn3.onfocus = function() {
    imgCont.style.transform = "translate(-639px)";
}

btn4.onfocus = function() {
    imgCont.style.transform = "translate(-1278px)";
}

btn5.onfocus = function() {
    imgCont.style.transform = "translate(-1917px)";
}
