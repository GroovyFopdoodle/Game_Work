var Game_1 = document.getElementById("Game_1");
var Game_2 = document.getElementById("Game_2");
var Game_3 = document.getElementById("Game_3");

Game_1.onmouseover = function() {mouseOver1()};
Game_1.onmouseout = function() {mouseOut1()};
Game_2.onmouseover = function() {mouseOver2()};
Game_2.onmouseout = function() {mouseOut2()};
Game_3.onmouseover = function() {mouseOver3()};
Game_3.onmouseout = function() {mouseOut3()};

function mouseOver1() {
    Game_1.style.width = "735px";
    Game_1.style.padding = "26.25px";
    Game_1.style.fontSize = "26px";
}
function mouseOut1() {
    Game_1.style.width = "700px";
    Game_1.style.padding = "25px";
    Game_1.style.fontSize = "24px";
}
function mouseOver2() {
    Game_2.style.width = "735px";
    Game_2.style.padding = "26.25px";
    Game_2.style.fontSize = "26px";
}
function mouseOut2() {
    Game_2.style.width = "700px";
    Game_2.style.padding = "25px";
    Game_2.style.fontSize = "24px";
}
function mouseOver3() {
    Game_3.style.width = "735px";
    Game_3.style.padding = "26.25px";
    Game_3.style.fontSize = "26px";
}
function mouseOut3() {
    Game_3.style.width = "700px";
    Game_3.style.padding = "25px";
    Game_3.style.fontSize = "24px";
}