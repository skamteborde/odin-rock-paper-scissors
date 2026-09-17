// Variables in the global scope to keep score
let humanScore = 0;
let computerScore = 0;

/*
-- Write a function that randomly returns 'rock', 'paper', or 'scissors' --

Assign a variable 'choice' to a random number:
    Generate a random number that is greater than or equal to 0, and less than 1
    The random number is multiplied by 3, and rounded down to the nearest whole (0, 1, or 2)

If the choice variable is between 0, print 'rock'
If the choice variable is between 1, print 'paper'
If the choice variable is between 2, print 'scissors'
*/

function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    console.log(choiceNum); // Checking the integer associated with the computerChoice
    if (choiceNum === 0) {
        return 'rock';
    } else if (choiceNum === 1) {
        return 'paper';
    } else if (choiceNum === 2) {
        return 'scissors';
    }
}

console.log(getComputerChoice());

/*
-- Write a function that takes the user choice and returns it --

Ask the user to write their choice
Provide a space where the user can write their choice
Return that choice
*/

function getHumanChoice() {
    let choicePrompt = prompt("Paper, scissors, rock!");
    return choicePrompt.toLowerCase;
}

let humanChoose = getHumanChoice();

/*
-- Write a function that takes the human and computer player choices as arguments, 
    plays a single round, incremenets the round winner's score, 
    and logs a winner announcement --

Create a function called playRound - plays a round of RPS
    Define two parameters for this function: humanChoice, computerChoice
    Make the humanChoice parameter case insensitive for input variation
        Convert all inputs into lowercase for the parameter

    Define rules of the game
        Rock -> Scissors -> Paper -> Rock

        If human choice is equal to computer choice it's a tie

        If human choice is rock AND computer choice is scissors, human wins
        If human choice is paper AND computer chouce is rock, human wins
        If human chouce is scissors AND computer chouce is paper, human wins

        All other instances, the computer will win (e.g. human=scissors, computer=rock)

playRound function logs a string value into the console representing the round winner
Increments the humanScore or computerScore variable based on the round winner
*/

function playRound(human, computer) {

    let humanChoice = humanChoose;
    let computerChoice = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (((humanChoice = 'rock') && (computerChoice = 'scissors'))
    || ((humanChoice = 'paper') && (computerChoice = 'rock'))
    || ((humanChoice = 'scissors') && (computerChoice = 'paper'))) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

playRound();