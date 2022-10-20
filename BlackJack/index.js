let num1 = 10;
let num2 = 7;

let sum = num1 + num2;

console.log(sum);

let hasBlackjack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame(){

    if (sum <= 20) {
        message = "Do you want to draw a new card? ";
        
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! ";
        hasBlackjack = true;
    }
    else {
        message = "You're out of the game! ";
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = " " + sum;
    console.log(message);
}
