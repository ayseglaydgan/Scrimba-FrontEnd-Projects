
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sum = 0;

function add(){
    sum = num1 + num2;
    document.getElementById("sum-el").textContent = sum;
}

function subtract(){
    sum = num1 - num2;
    document.getElementById("sum-el").textContent = sum;
}

function multiply(){
    sum = num1 * num2;
    document.getElementById("sum-el").textContent = sum;
}

function divide(){
    sum = num1 / num2;
    document.getElementById("sum-el").textContent = sum;
}



