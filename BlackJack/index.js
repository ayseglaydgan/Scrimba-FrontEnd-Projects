let cards = [];
let sum = 0;

let hasBlackjack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "John",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

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
        isAlive = true;
        hasBlackjack = false;
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! ";
        hasBlackjack = true;
        isAlive = false;
    }
    else {
        message = "You're out of the game! ";
        isAlive = false;
        hasBlackjack = false;
    }
    messageEl.textContent = message;
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}


function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let newCard = getRandomCard();
        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
    
}
