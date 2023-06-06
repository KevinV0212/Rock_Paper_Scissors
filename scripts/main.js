// generates random choice for computer via Math.random
function getComputerChoice(){
    const choice =  Math.floor(Math.random() * 3) + 1;
   
    // assign each of 3 values to a game choices
    if (choice === 1)
    {
        return 'ROCK';
    }
    else if (choice === 2)
    {
        return 'PAPER';
    }
    else
    {
        return 'SCISSORS';
    }

}

// simulates a round of the game from player and compute rimput
function playRound(playerSelection, computerSelection){
    let summary = `Player chooses ${playerSelection}, Computer chooses ${computerSelection}.\n`;
    let playerWins = false;
    
    
    // handles ties
    if (playerSelection === computerSelection)
    {
        console.log(summary + ' It is a tie !!!');
        return 'tie';
    }

    if (playerSelection === 'ROCK')
    {
        if (computerSelection === 'PAPER')
        {
            console.log(summary + ' The Computer Wins!!!');
        }
        else
        {
            console.log(summary + ' The Player Wins !!!');
            playerWins = true;
        }
    }
    else if (playerSelection === 'PAPER')
    {
        if (computerSelection === 'SCISSORS')
        {
            console.log(summary + ' The Computer Wins!!!')
        }
        else
        {
            console.log(summary + ' The Player Wins !!!')
            playerWins = true;
        }
    }
    else
    {
        if (computerSelection === 'ROCK')
        {
            console.log(summary + ' The Computer Wins!!!')
        }
        else
        {
            console.log(summary + ' The Player Wins !!!')
            playerWins = true;
        }
    }

    // return 'user' if user wins, 'computer' if computer wins, then 'tie' if it is a tie
    if (playerWins)
    {
        return "user";
    }
    else
    {
        return "computer";
    }
}

function game(){
    let numUserWins = 0;

    let numComputerWins = 0;
    
    let result = '';
    

    for (let round = 1; round <= 5; round++)
    {
        let userInput = prompt('Enter your move: Rock, Paper, or Scissors').toUpperCase();
        let computerInput = getComputerChoice();
        console.log(`Round ${round}:`);

        // track who wins
        result = playRound(userInput, computerInput);
        if (result === 'user')
        {
            numUserWins++;
        }
        else if (result === 'computer')
        {
            numComputerWins++;
        }
        else
        {
            numUserWins++;
            numComputerWins++;
        }
    }  
    
    // print a message depending on if
    //  the user wins; the computer wins; or there was an overall tie
    if (numUserWins > numComputerWins)
    {
        console.log("User Wins: Man has overcome machine!!!")
    }
    else if (numComputerWins > numUserWins){
        console.log("Computer Wins: The robot revolution is upon us!!!")
    }
    else {
        console.log("Tie: Let us coexist like in Transformers or something.")
    }
}

game();