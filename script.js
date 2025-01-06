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
    /*const player = document.createElement('p');
    player.textContent = choice;
    results.appendChild(player);*/
    //console.log(choice)
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

    
    if (humanScore == 5 || computerScore == 5) {
        if(humanScore > computerScore) {
            winner = "Human";
        }
        else if (humanScore < computerScore) {
            winner = "Computer";
        }
        const final = document.createElement('p');
        final.textContent = `Game winner is ${winner}`;
        results.appendChild(final)
        //console.log(`Game winner is ${winner}`);
        exit(0);
    }
    else {
        if(humanScore > computerScore) {
            winner = "Human won";
        }
        else if (humanScore < computerScore) {
            winner = "Computer won";
        }
        else {
            winner = "Tie Game";
            }
        const choice = document.createElement("p");
        choice.textContent = `Computer: ${getComputerChoice}, Human: ${userChoice}`;
        const score = document.createElement("p");
        score.textContent = `Computer: ${computerScore}, Human: ${humanScore}`;
        results.appendChild(choice);
        results.appendChild(score);
        //console.log(`Computer: ${computerScore}, Human: ${humanScore}`);
    }
    /*else {
    winner = "Tie Game";
    }*/
}

var container = document.querySelector(".container");
var rock = document.createElement("button");
rock.textContent = "Rock"
const paper = document.createElement('button');
paper.textContent = "Paper"
const scissors = document.createElement('button');
scissors.textContent = "Scissors"

rock.classList.add("btn") 
paper.classList.add("btn")
scissors.classList.add("btn")

rock.setAttribute("style", "color: white; padding: 8px; border: px; background: black;")
paper.setAttribute("style", "color: white; padding: 8px; border: px; background: black;")
scissors.setAttribute("style", "color: white; padding: 8px; border: px; background: black;")

const results = document.createElement('div');

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
container.appendChild(results);
/*choice = querySelector(".btn")*/

rock.addEventListener("click", () => {
    game("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    game("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    game("scissors", getComputerChoice());
});


/*button.addEventListener("click", function game(userChoice, getComputerChoice) {

});*/

/*function playGame (times) {
    while (times > 0 ) { 
        const humanSelection = userChoice()
        const computerSelection = getComputerChoice()
        game(humanSelection, computerSelection)
        times--
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
    else {
       winner = "Tie Game"
    }
    console.log(`Computer: ${computerScore}, Human: ${humanScore}`)
    console.log(winner)
}    
    
}

playGame(5)*/