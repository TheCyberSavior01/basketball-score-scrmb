const guestCurrentScore = document.getElementById("guest-current-score")
const homeCurrentScore = document.getElementById("home-current-score")
const newGameBtn = document.getElementById("new-game-btn")
let homeScoreCounter = 0
let guestScoreCounter = 0


function homePlusOne() {
    homeScoreCounter += 1
    homeCurrentScore.textContent = homeScoreCounter
}

function homePlusTwo() {
    homeScoreCounter += 2
    homeCurrentScore.textContent = homeScoreCounter
}

function homePlusThree() {
    homeScoreCounter += 3
    homeCurrentScore.textContent = homeScoreCounter
}

function guestPlusOne() {
    guestScoreCounter += 1
    guestCurrentScore.textContent = guestScoreCounter
}

function guestPlusTwo() {
    guestScoreCounter += 2
    guestCurrentScore.textContent = guestScoreCounter
}

function guestPlusThree() {
    guestScoreCounter += 3
    guestCurrentScore.textContent = guestScoreCounter
}

function startNewGame() {
    homeScoreCounter = 0
    guestScoreCounter = 0
    homeCurrentScore.textContent = homeScoreCounter
    guestCurrentScore.textContent = guestScoreCounter
}