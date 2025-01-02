
function userChoice() {
    let user = window.prompt("Choose one. Rock, paper or scissors").toLowerCase()
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

    return choice
}

function game (userChoice, getComputerChoice) {

}
console.log(userChoice())
console.log(getComputerChoice())