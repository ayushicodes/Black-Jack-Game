let firstCard = 0;
let secondCard = 10;
let sum = firstCard + secondCard;
let isAlive = true
let hasBlackjack = false

let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')

function renderGame() {
    if (sum <= 20) {
        message = "Add a card"
    }
    else if (sum === 21) {
        message = "wohooo Black jack"
    }
    else if (sum >= 21) {
        message = "You are out of the game"
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum:" + " " + sum
    cardEl.textContent = "Card:" + " " + firstCard + " " + secondCard
}

function newCard() {
    let card = 11;
    sum += card
    renderGame()
}
