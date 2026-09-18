function playGame() {

    let humanScore = 0;     // Defining variables for keeping score
    let computerScore = 0;

    function getComputerChoice() {  // Function to calculate a random computer choice
        let choiceNum = Math.floor(Math.random() * 3); // Randomly generates either 0, 1, or 2
        //console.log(choiceNum); // Checking the integer associated with the computerChoice
        if (choiceNum === 0) {
            console.log('Computer: Rock');  // What the player will see
            return 'rock';                  // What is assigned internally
        } else if (choiceNum === 1) {
            console.log('Computer: Paper'); // ...and so on
            return 'paper';
        } else if (choiceNum === 2) {
            console.log('Computer: Scissors');
            return 'scissors';
        }
    }

    function getHumanChoice() { // Outputs the choice of the player/human
        const input = prompt("Paper, scissors, rock!"); // Prompt box appears asking for input
        console.log('Human: ' + input);                 // Shows player what they wrote
        return input.toLowerCase();     // Returns a case insensitive string for comparisons
    }

    function playRound(humanChoice, computerChoice) { // Compares player and computer choice
        if (humanChoice === computerChoice) { // If they have the same choice
            console.log("It's a tie!");
        } else if ( // Conditions for the human to win                     // H:     C:
           ((humanChoice == 'rock') && (computerChoice == 'scissors')) ||  // Rock > Scissors
           ((humanChoice == 'paper') && (computerChoice == 'rock')) ||     // Paper > Rock
           ((humanChoice == 'scissors') && (computerChoice == 'paper'))    // Scissors > Paper
        ) {
            console.log("You win!"); 
            humanScore++        // Increases humans score by one
            return humanScore;
        } else {                // Every other condition should result in the computer winning
            console.log("You lose!");
            computerScore++;    // Increases computers score by one
            return computerScore;
        }
    }

    function declareWinner() {  // Calculates who won the game
        if (humanScore > computerScore) {   // If human has more points
            console.log('Human wins the game!');
        } else if (computerScore > humanScore) { // If computer has more points
            console.log('Computer wins the game!');
        } else { // Everything else is a tie (i.e. if the computer and human have equal points)
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

    declareWinner(); // Call the function that declares a winner
}

playGame(); // Calls the function to play the game (five rounds)