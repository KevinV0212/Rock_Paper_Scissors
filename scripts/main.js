// generates random choice for computer via Math.random
function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
   
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
        console.log(summary + ' It is a tie!!!');
        return 'tie';
    }

    // handles outcomes when player chooses rock
    if (playerSelection === 'ROCK')
    {
        if (computerSelection === 'PAPER')
        {
            console.log(summary + ' The Computer Wins!!!');
        }
        else
        {
            console.log(summary + ' The Player Wins!!!');
            playerWins = true;
        }
    }
    // handles outcomes when player chooses paper
    else if (playerSelection === 'PAPER')
    {
        if (computerSelection === 'SCISSORS')
        {
            console.log(summary + ' The Computer Wins!!!')
        }
        else
        {
            console.log(summary + ' The Player Wins!!!')
            playerWins = true;
        }
    }
    // handles outcomes when player chooses scissors
    else
    {
        if (computerSelection === 'ROCK')
        {
            console.log(summary + ' The Computer Wins!!!')
        }
        else
        {
            console.log(summary + ' The Player Wins!!!')
            playerWins = true;
        }
    }

    // return 'user' if user wins, 'computer' if computer wins
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
    const NUM_GAMES = 5;

    let round = 0;

    let userWins = 0;
    let computerWins = 0;
    let result = '';
    
    const container = document.querySelector('.container');
    const roundCount = document.querySelector('#round-count');
    
    // add event listener to all buttons (querySelectorAll)
    const buttons = document.querySelectorAll('.move-btn');
    buttons.forEach(button => button.addEventListener('click', (e) => {
        if (userWins >= NUM_GAMES || computerWins >= NUM_GAMES) return;
        round++;
        roundCount.textContent = `Round: ${round}`
        
        // onclick, get computer choice
        let computerMove = getComputerChoice();
        // get then set player choice to the inner text of the button
        let playerMove = e.target.innerText;
        // play round and capture the value in result
        result = playRound(playerMove, computerMove);

        if (result === 'user')
        {
            userWins++;
        }
        else if (result === 'computer')
        {
            computerWins++;
        }
        else
        {
            userWins++;
            computerWins++;
        }
        const scoreboard = document.querySelector('.scoreboard');
        scoreboard.textContent = `User: ${userWins}   Computer: ${computerWins}`;

        if (userWins >= NUM_GAMES || computerWins >= NUM_GAMES)
        {
            const outcome = document.createElement('p');
            if (userWins > computerWins)
                outcome.textContent = 'User Wins: Man has overcome machine!!!';
            else if (computerWins > userWins)
                outcome.textContent = 'Computer Wins: The robot revolution is upon us!!!';
            else
                outcome.textContent = 'Tie: Let us coexist like in Transformers or something.';

            container.appendChild(outcome);
        }
        
        // if (numUserWins > numComputerWins)
        // {
        //     console.log("User Wins: Man has overcome machine!!!")
        // }
        // else if (numComputerWins > numUserWins){
        //     console.log("Computer Wins: The robot revolution is upon us!!!")
        // }
        // else {
        //     console.log("Tie: Let us coexist like in Transformers or something.")
        // }
    }))
}
game();