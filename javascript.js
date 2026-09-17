/*
-- Write a function that randomly returns 'rock', 'paper', or 'scissors' --

Assign a variable 'choice' to a random number:
    Generate a random number that is greater than or equal to 0, and less than 1
    The random number is multiplied by 3, and rounded down to the nearest whole (0, 1, or 2)

If the choice variable is between 0, print 'rock'
If the choice variable is between 1, print 'paper'
If the choice variable is between 2, print 'scissors'
*/

/*
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    //console.log(choiceNum); // Checking the integer associated with the computerChoice
    if (choiceNum === 0) {
        console.log('Computer: Rock');
        return 'rock';
    } else if (choiceNum === 1) {
        console.log('Computer: Paper');
        return 'paper';
    } else if (choiceNum === 2) {
        console.log('Computer: Scissors');
        return 'scissors';
    }
}
*/

/*
-- Write a function that takes the user choice and returns it --

Ask the user to write their choice
Provide a space where the user can write their choice
Return that choice
*/

/*
function getHumanChoice() {
    let choicePrompt = prompt("Paper, scissors, rock!");
    console.log('Human: ' + choicePrompt);
    return choicePrompt
}
*/

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

/*
function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        console.log("It's a tie!");
    } else if (
       ((humanChoice.toLowerCase() == 'rock') && (computerChoice == 'scissors'))
    || ((humanChoice.toLowerCase() == 'paper') && (computerChoice == 'rock'))
    || ((humanChoice.toLowerCase() == 'scissors') && (computerChoice == 'paper'))) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

const humanSelection = getHumanChoice(); // Returning inputs
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); // Calling the function with the new inputs.
*/

/*
-- Write a function that plays five rounds, keeps track of score, and then declares a winner --

A function playGame will call the playRound function five times
    The playRound function will be declared inside of the playGame function
    The humanScore and computerScore variables will also be inside playGame
    
    Each playRound call will +1 to either variable, depending on who wins
        If human wins, logs +1 to human and console logs "You win!" -- shows score
        If computer wins, logs +1 to computer and console logs "You lose!" -- shows score
        If it's a tie, neither gets +1 and console logs "It's a tie!" -- shows score

    playRound will be called 5 times
    After the fifth call, a winner will be declared
        The score variables will be compared, a message will  be logged accordingly
*/

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let choiceNum = Math.floor(Math.random() * 3);
        //console.log(choiceNum); // Checking the integer associated with the computerChoice
        if (choiceNum === 0) {
            console.log('Computer: Rock');
            return 'rock';
        } else if (choiceNum === 1) {
            console.log('Computer: Paper');
            return 'paper';
        } else if (choiceNum === 2) {
            console.log('Computer: Scissors');
            return 'scissors';
        }
    }

    function getHumanChoice() {
        const input = prompt("Paper, scissors, rock!");
        console.log('Human: ' + input);
        return input.toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
           ((humanChoice == 'rock') && (computerChoice == 'scissors')) || 
           ((humanChoice == 'paper') && (computerChoice == 'rock')) || 
           ((humanChoice == 'scissors') && (computerChoice == 'paper'))
        ) {
            console.log("You win!");
            humanScore++
            return humanScore;
        } else {
            console.log("You lose!");
            computerScore++;
            return computerScore;
        }
    }

    function declareWinner() {
        if (humanScore > computerScore) {
            console.log('Human wins the game!');
        } else if (computerScore > humanScore) {
            console.log('Computer wins the game!');
        } else {
            console.log('The game is a tie!');
        }
    }

    let humanSelection = getHumanChoice(); // Calling the choice function
    let computerSelection = getComputerChoice(); // Calling computer choice
    playRound(humanSelection, computerSelection); // Playing a round with the first choice
    console.log('Human: ' + humanScore + ' | Computer: ' + computerScore); // Show score update

        humanSelection = getHumanChoice(); // Calling a second choice
        computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); // Playing a second round
    console.log('Human: ' + humanScore + ' | Computer: ' + computerScore); // Show score update

        humanSelection = getHumanChoice(); // Calling a third choice
        computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); // Playing a third round
    console.log('Human: ' + humanScore + ' | Computer: ' + computerScore); // Show score update

        humanSelection = getHumanChoice(); // Calling a fourth choice
        computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); // Playing a fourth round
    console.log('Human: ' + humanScore + ' | Computer: ' + computerScore); // Show score update

        humanSelection = getHumanChoice(); // Calling a final choice
        computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); // Playing a final round
    console.log('Human: ' + humanScore + ' | Computer: ' + computerScore); // Show score update

    declareWinner();
}

playGame();