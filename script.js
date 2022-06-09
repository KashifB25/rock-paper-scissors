function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase();
    let winConditon = () => (playerChoice == "rock" && computerSelection == "Scissors") || (playerChoice == "paper" && computerSelection == "Rock") || (playerChoice == "scissors" && computerSelection == "Paper")
    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie! Both chose " + playerSelection;
    }
    else if (winConditon()) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));