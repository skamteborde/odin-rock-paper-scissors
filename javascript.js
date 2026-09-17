/*
Pseudocode:
-- Write a function that randomly returns 'rock', 'paper', or 'scissors' --

Assign a variable 'choice' to a random number:
    Generate a random number that is greater than or equal to 0, and less than 1
    The random number is multiplied by 3, and rounded down to the nearest whole (0, 1, or 2)

If the choice variable is between 0, print 'rock'
If the choice variable is between 1, print 'paper'
If the choice variable is between 2, print 'scissors'
Otherwise print the number // This is to catch any unforseen errors
*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else if (computerChoice === 2) {
        return 'Scissors';
    }
}

console.log(getComputerChoice());

/*
Pseudocode:
-- Write a function that takes the user choice and returns it --

Ask the user to write their choice
Provide a space where the user can write their choice
Return that choice
*/

function getUserChoice() {
    let userChoice = prompt("Paper, scissors, rock!");
    return userChoice;
}

console.log(getUserChoice());

