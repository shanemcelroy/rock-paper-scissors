let playerScore = 0;
let computerScore = 0;
let round = 1;

function playRound() {
    const choices = ["rock", "paper", "scissors"];
    let randInt = Math.floor(Math.random() * 3)
    let getComputerChoice = choices[randInt]
    let getUserChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors': ").toLowerCase()

    if (getUserChoice === 'rock') {
        switch (getComputerChoice) {
            case 'paper':
                computerScore += 1
                return "You lose! Paper beats rock!";
            case 'scissors':
                playerScore += 1
                return "You win! Rock beats scissors!";
            default:
                return "You tied! You both chose rock!";
        }
    } else if (getUserChoice === 'paper') {
        switch (getComputerChoice) {
            case 'rock':
                playerScore += 1
                return "You win! Paper beats rock!";
            case 'scissors':
                computerScore += 1
                return "You lose! Scissors beats paper!";
            default:
                return "You tied! You both chose paper!";
        }
    } else if (getUserChoice === 'scissors') {
        switch (getComputerChoice) {
            case 'rock':
                computerScore += 1
                return "You lose! Rock beats scissors!";
            case 'paper':
                playerScore += 1
                return "You win! Scissors beats paper!";
            default:
                return "You tied! You both chose scissors!";
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round: ${round}`)
        console.log(playRound())
        round++;
    }
    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)

    if (playerScore > computerScore) {
        console.log(`You win!`)
    } else if (computerScore > playerScore) {
        console.log(`The computer wins!`)
    } else {
        console.log("Tie game!")
    }
    //The score needs to be reset after the game finishes to ensure accurate values for a new game
    playerScore = 0
    computerScore = 0
}
playGame()