let a = document.getElementById("firstCard");
let card1 = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let b = document.getElementById("secondCard");
let card2 = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
let cardSum = card1 + card2;
let btn1 = document.getElementById("getCard1");
let btn2 = document.getElementById("newCard");
let message = document.getElementById("message");
let thirdDiv = document.getElementById("thirdCard");
let sum = 0;
function startGame(){
{
    btn1.addEventListener("click", () => {
        a.textContent = card1;
        b.textContent = card2;
        sum = sum + cardSum;
        if (sum < 21) {
            message.textContent = "Take a card again and best of luck" + sum;
        }
        else if (sum === 21) {
            message.textContent = "Perfect, You got Jackpot" + sum;
            hasBlackJack = true;
        }
        else {
            message.textContent = "Retry later, You've lost" + sum;
            isAlive = false;
        }
    
    if(!isAlive) {
        return
    }
    });
    
}
}

function newCard()
{
    let c = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
    let thirdCard = document.createElement('span');
    sum += c;
    thirdCard.textContent = c + " " + sum;
    thirdDiv.appendChild(thirdCard)
    
    startGame();

}