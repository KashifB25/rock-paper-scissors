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
            //result.innerHTML += `<br>Round ${round + 1}: You Win!\n`;
        } else if (res == -1) {
            computerScore++;
            //result.innerHTML += `<br>Round ${round + 1}: You Lose!\n`;
        } else {
            //result.innerHTML += `<br>Round ${round + 1}: ` + 'Tie!\n';
        }
        round++;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.textContent;
        game(playerChoice);
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        document.querySelector('.play-page-round').textContent = `Round ${round}`;
    });
});
