
document.addEventListener("DOMContentLoaded", () => {

    let a = document.getElementById("firstCard");
    let b = document.getElementById("secondCard");
    let btn1 = document.getElementById("getCard1");
    let message = document.getElementById("message");
    let sum = 0;
    btn1.addEventListener("click", () => {
        a.textContent = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
        b.textContent = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
        sum = Number(a.textContent) + Number(b.textContent);
        
        if (sum < 21) {
            message.textContent = "Take a card again and best of luck" + sum;
        }
        else if (sum === 21) {
            message.textContent = "Perfect, You got Jackpot" + sum;
        }
        else {
            message.textContent = "Retry later, You've lost" + sum;
        }
    });
    
})