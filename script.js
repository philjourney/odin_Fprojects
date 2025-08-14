
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const idx = Math.floor(Math.random() * choices.length);
    return choices[idx];
}


function getHumanChoice() {
    let choice = 0;
    while (choice <= 0 || choice > choices.length) {
        choice = prompt("Choose 1 for 'Rock', 2 for 'Paper' or 3 for 'Scissors': ");
    }
    return choices[choice - 1];
}

let humanScore = 0;
let ComputerScore = 0;


function playRound(humanChoice, ComputerChoice) {
    if (humanChoice === ComputerChoice) {
        return console.log("It's a tie!")
    }
    if (humanChoice === "Rock") {
        if (ComputerChoice === "Paper") {
            humanScore += 1;
            return console.log(`You win! ${humanChoice} beats ${ComputerChoice}. 
                The score is: Player ${humanScore} - ${ComputerScore} Computer`);
        } else {
            ComputerScore += 1;
            return console.log(`You lose! ${ComputerChoice} beats ${humanChoice}. 
                The score is: Player ${humanScore} - ${ComputerScore} Computer`);
        }
    } else if (humanChoice === "Paper") {
        if (ComputerChoice === "Rock") {
            humanScore += 1;
            return console.log(`You win! ${humanChoice} beats ${ComputerChoice}. 
                The score is: Player ${humanScore} - ${ComputerScore} Computer`);
        } else {
            ComputerScore += 1;
            return console.log(`You lose! ${ComputerChoice} beats ${humanChoice}. 
                The score is: Player ${humanScore} - ${ComputerScore} Computer`);
        }
    } else {
        if (ComputerChoice === "Paper") {
            humanScore += 1;
            return console.log(`You win! ${humanChoice} beats ${ComputerChoice}. 
                The score is: Player ${humanScore} - ${ComputerScore} Computer`);
        } else {
            ComputerScore += 1;
            return console.log(`You lose! ${ComputerChoice} beats ${humanChoice}. 
                The score is: Player ${humanScore} - ${ComputerScore} Computer`);
        }
    }
}


function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Game is over. Final score : Player ${humanScore} - ${ComputerScore} Computer`);

}

playGame()

