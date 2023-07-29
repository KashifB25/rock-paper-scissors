let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector('.play-page-gamer--mine-block .play-page-gamer__score');
const computerScoreDisplay = document.querySelector('.play-page-gamer--computer-block .play-page-gamer__score');

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

let round = 1;
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
function game(playerChoice) {
        let res = playRound(playerChoice, getComputerChoice());
        if (res == 1) {
            playerScore++;
            showRoundResult("You Win!");
            //result.innerHTML += `<br>Round ${round + 1}: You Win!\n`;
        } else if (res == -1) {
            computerScore++;
            //result.innerHTML += `<br>Round ${round + 1}: You Lose!\n`;
        } 
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

        if (playerScore === 5 || computerScore === 5) {
            // Show the final screen with the winner's result
            showFinalScreen(playerScore, computerScore);
        } else {
            // Update the round number
            document.querySelector('.play-page-round').textContent = `Round ${round + 1}`;
            round++;
        }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.textContent;
        game(playerChoice);
    });
});

function showRoundResult(result) {
    const roundResultSection = document.querySelector('.play-page-round-result');
    const roundResultSpan = roundResultSection.querySelector('span');
    roundResultSpan.textContent = result;
}

function showFinalScreen(playerScore, computerScore) {
    const finalScreen = document.querySelector('.play-page-final-screen');
    const finalScreenText = document.querySelector('.play-page-final-screen__text');
    const finalScreenScore = document.querySelector('.play-page-final-screen__score');

    // Determine the winner based on the scores
    let winner = playerScore > computerScore ? 'You Win!' : 'Computer Wins!';

    // Update the final screen text and score display
    finalScreenText.textContent = winner;
    finalScreenScore.textContent = `${playerScore} : ${computerScore}`;

    // Show the final screen
    finalScreen.style.display = 'block';
}

// Add event listener to reset the game when the final screen is clicked (optional)
document.querySelector('.play-page-final-screen').addEventListener('click', () => {
    resetGame();
});

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    document.querySelector('.play-page-round').textContent = `Round ${round}`;
    document.querySelector('.play-page-final-screen').style.display = 'none';
}
