let player = {
    Name: "Ayushi",
    points: 120


}
let cards = []
let sum = 0;
let isAlive = false
let hasBlackjack = false

let message = ""

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.Name + ":" + " " + "$" + player.points


function getRandomnumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 1
    }
    else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomnumber()
    let secondCard = getRandomnumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true

    renderGame()



}




function renderGame() {

    if (sum <= 20) {
        message = "Add a card"
    }
    else if (sum === 21) {
        message = "wohooo Black jack"
        hasBlackjack = true
    }
    else if (sum >= 21) {
        message = "You are out of the game"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum:" + " " + sum
    cardEl.textContent = "Card:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += " " + cards[i] + " "
    }
}

function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomnumber()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}
