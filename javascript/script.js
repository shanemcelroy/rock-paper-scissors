let playerScore = 0;
let computerScore = 0;
let round = 1;

//Create a playRound function that returns a string for the winner or loser of the round
function playRound() {
    //Create an array of choices for the computer 
    const choices = ["rock", "paper", "scissors"];
    //Store a random number between 0 and the length of the array to use as an index for the computers choice
    let randInt = Math.floor(Math.random() * 3)
    //Create a getComputerChoice variable that randomly selects an item in the array
    let getComputerChoice = choices[randInt]
    //Create a getUserChoice variable that stores the user input of Rock, Paper, or Scissors 
    let getUserChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors': ").toLowerCase()

    if (getUserChoice === 'rock') {
        switch (getComputerChoice) {
            case 'paper':
                //After each round is played, add a point to either the player or computer
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

//Create a playGame function to play a 5-round game
function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round: ${round}`)
        console.log(playRound())
        round++;
    }
    //After the fifth round, return a string of the player with the highest score
    console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`)

    if (playerScore > computerScore) {
        console.log(`You win!`)
    } else if (computerScore > playerScore) {
        console.log(`The computer wins!`)
    } else {
        console.log("Tie game!")
    }
    //Reset the scores after the game has finished
    playerScore = 0
    computerScore = 0
}
playGame()