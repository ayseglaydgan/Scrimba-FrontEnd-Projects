let num1 = getRandomCard();
let num2 = getRandomCard();
let cards = [num1, num2];

let sum = num1 + num2;

console.log(sum);

let hasBlackjack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard(){
    let random = Math.floor(Math.random() * 13 ) + 1;
    if (random > 10){
        return 10;
    }
    else if (random === 1){
        return 11;
    }else{
        return random;
    }
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

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
    
    console.log(message);
}

function startGame(){
    renderGame();
}


function newCard(){
    console.log("Drawing a new card from the deck!");
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;
    renderGame();
}
