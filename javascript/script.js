//Create an array of choices for the computer 
const choices = ["rock", "paper", "scissors"];
//Store a random number between 0 and the length of the array to use as an index for the computers choice
let randInt = Math.floor(Math.random() * 3)
//Create a getComputerChoice variable that randomly selects an item in the array
let getComputerChoice = choices[randInt]
//Create a getUserChoice variable that stores the user input of Rock, Paper, or Scissors 
let getUserChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors': ").toLowerCase()
//Create a playRound function that takes the user and computer choice as parameters and returns a string if you win or lose
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch (getComputerChoice) {
            case 'paper':
                return "You lose! Paper beats rock!";
            case 'scissors':
                return "You win! Rock beats scissors!";
            default:
                return "You tied! You both chose rock!";
        }
    }
    

}
playRound(getUserChoice, getComputerChoice)
//Wrap the playRound function into a playGame function to play a 5-round game
    //Create variables playerScore, computerScore, and roundNumber 
    //After each round is played, add a point to either the player or computer, and increment round by 1
    //After the fifth round, return a string of the player with the highest score