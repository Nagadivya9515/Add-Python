
let a = document.getElementById("firstCard");
let card1 = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let b = document.getElementById("secondCard");
let card2 = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let cardSum = card1 + card2;
let sumDisplay = document.getElementById("cardSum");
let btn1 = document.getElementById("getCard1");
let btn2 = document.getElementById("newCard");
let message = document.getElementById("message");
let thirdDiv = document.getElementById("thirdCard");
let sum = 0;
let hasBlackJack = false
let isAlive = true


function startGame(){
{
        a.textContent = "First Card: " + card1;
        b.textContent = "Second Card: " + card2;
        // sum = sum + cardSum;
        sumDisplay.textContent = "Sum: " +cardSum;
        if (cardSum < 21) {
            message.textContent = "Take a card again and best of luck";
        }
        else if (cardSum === 21) {
            message.textContent = "Perfect, You got Jackpot";
            hasBlackJack = true;
        }
        else {
            message.textContent = "Retry later, You've lost";
            isAlive = false;
        }
    
    if(!isAlive) {
        return
    }
}
}

function newCard()
{
    let c = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
    let thirdCard = document.createElement('span');
    cardSum += c;
    sumDisplay.textContent = "Sum: " + cardSum;

    // thirdCard.textContent = c + " " + sum;
    // thirdDiv.appendChild(thirdCard
    
    startGame();

}

function newGame() {
    card1 = Math.floor(Math.random() * 10) + 2;
    card2 = Math.floor(Math.random() * 10) + 2;
    cardSum = card1 + card2;
    sum = 0;
    hasBlackJack = false;
    isAlive = true;

    a.textContent = ""
    b.textContent = ""
    sumDisplay.textContent = ""
    message.textContent = "New game started, Best of Luck!";
    thirdDiv.innerHTML = "";
}