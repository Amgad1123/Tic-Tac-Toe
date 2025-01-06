let humanScore = 0
let computerScore = 0

function userChoice() {
    let user = window.prompt("Choose one. Rock, paper or scissors").toLowerCase()
    console.log(user)
    return user
}
function getComputerChoice() {
    let choice
    let num = Math.random()
    if (num < 0.33) {
        choice = "rock"
    }
    else if (num < .66) {
        choice = "paper"
    }
    else{
        choice = "scissors"
    }
    console.log(choice)
    return choice
}

function game (userChoice, getComputerChoice) {
    let winner
    if (userChoice == "rock") {
        if (getComputerChoice == "rock") {
            
        }
        else if (getComputerChoice == "paper") {
             computerScore++;
        }
        else {
            humanScore++;
        }
    }
    else if (userChoice == "paper"){
        if (getComputerChoice == "rock") {
            humanScore++
        }
        else if (getComputerChoice == "paper") {
        }
        else {
            computerScore++
        }
    }
    else if (userChoice == "scissors") {
        if (getComputerChoice == "rock") {
            computerScore++
        }
        else if (getComputerChoice == "paper") {
             humanScore++
        }
        else {
        }
    }

    if(humanScore > computerScore) {
        winner = "Human won"
    }
    else if (humanScore < computerScore) {
        winner = "Computer won"
    }

    console.log(winner)
}
const humanSelection = userChoice()
const computerSelection = getComputerChoice()
game(humanSelection, computerSelection)