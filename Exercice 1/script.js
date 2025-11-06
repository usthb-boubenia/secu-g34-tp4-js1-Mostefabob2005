"use strict";

function f1() {//Declaration d'une fonction (slide 45)
    console.log("Boubekeur") //affiche ce qui est ecrit dans la console (slide 33)
}

function f2() {
    console.log("Mostefa Racim")
}

function f3() {
    console.log("Boubekeur Mostefa Racim")
}

function f4() {
   console.log("20 ans")
}

function f5() {
   console.log("10/20")
}

function f6() {
   console.log("3.14")
}

document.getElementById('btn1').addEventListener('click', f1);
document.getElementById('btn2').addEventListener('click', f2);
document.getElementById('btn3').addEventListener('click', f3);
document.getElementById('btn4').addEventListener('click', f4);
document.getElementById('btn5').addEventListener('click', f5);
document.getElementById('btn6').addEventListener('click', f6);
