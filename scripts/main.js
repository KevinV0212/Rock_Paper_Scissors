function getComputerChoice(){
    // generate a random number 1-3
    const choice =  Math.floor(Math.random() * 3) + 1;
    // assign each number to a choice
    // 1 - return rock; 2 - return paper; 3 - return scissors
    // return the string assignment for the original random number

    if (choice === 1)
    {
        return 'rock';
    }
    else if (choice === 2)
    {
        return 'paper';
    }
    else
    {
        return 'scissors';
    }

}

function playRound(playerSelection, computerSelection){
    let summary = `Player chooses ${playerSelection}, Computer chooses ${computerSelection}`;
    let playerWins = false;
    // handle ties
    
    // for each possible user choice, give a conditional choice for the 3 possible chioces the computer could have made
    // this is one else if ladder for the user choice, then 3 else if ladders for the 3 possible computer choices to compare them to
    
    // print out who wins the round in each case

    if (playerSelection === computerSelection)
    {
        console.log(summary + ' It is a tie !!!');
        return 'tie';
    }

    if (playerSelection === 'rock')
    {
        if (computerSelection === 'paper')
        {
            console.log(summary + ' The Computer Wins!!!');
        }
        else
        {
            console.log(summary + ' The Player Wins !!!');
            playerWins = true;
        }
    }
    else if (playerSelection === 'paper')
    {
        if (computerSelection === 'scissors')
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
        if (computerSelection === 'rock')
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
    // create numUserWins variable
    let numUserWins = 0;

    // create numComputerWins variable
    let numComputerWins = 0;
    // *initialize both to 0
    
    let result = '';
    // for 5 rounds:
    //  call playRound function 
    //      for user input, pass the prompt function as the first argument
    //      for the computer input, pass the getComputerChoice function as the second argument
    for (let round = 1; round <= 5; round++)
    {
        let userInput = prompt('Enter your move: Rock, Paper, or Scissors').toLowerCase();
        let computerInput = getComputerChoice();
        console.log(`Round ${round}:`);

        // set a result variable to call of playRound with both choices as input
        // based on result, increment either numUserWins, numComputerWins, or both;
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
    
    // if numUserWins > computer wins, print out user win message
    // else if numComputerWins > numUserWins, print out user message
    // else, print that it was a tie

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