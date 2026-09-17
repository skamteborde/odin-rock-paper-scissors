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
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    if (choice = 0) {
        console.log('Rock');
    } else if (choice = 1) {
        console.log('Paper');
    } else if (choice = 2) {
        console.log('Scissors');
    }
}

getComputerChoice();