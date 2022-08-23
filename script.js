function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    let winConditon = () => (playerChoice == "rock" && computerChoice == "scissors") 
        || (playerChoice == "paper" && computerChoice == "rock") 
        || (playerChoice == "scissors" && computerChoice == "paper")

    if (playerChoice === computerChoice) {
        return 0;
    }
    else if (winConditon()) {
        return 1;
    } else {
        return -1;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let res = playRound(prompt(), getComputerChoice());
        if (res == 1) {
            playerScore++;
            console.log(`Round ${i + 1}: You Win!`)
        } else if (res == -1) {
            computerScore++;
            console.log(`Round ${i + 1}: You Lose!`)
        } else {
            console.log(`Round ${i + 1}: ` + 'Tie!')
        }
    }
    if (playerScore > computerScore) {
        return "You Win!";
    } else if (playerScore < computerScore) {
        return "You Lose!";
    } else {
        return "It's a tie!"
    }
}

let playerScore = 0;
let computerScore  = 0;