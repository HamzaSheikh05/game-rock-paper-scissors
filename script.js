let playerScore = 0;
let computerScore = 0;
let message = "";
let playerWins = 0;
let computerWins = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  const computerHand = choices[Math.floor(Math.random() * choices.length)];
  return computerHand;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a Tie, You both picked ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    return `Nice! You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")
  ) {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    const computerSelection = computerPlay();
    let playerSelection = playerPlay();

    if (playerSelection === "rocks" || playerSelection === "rock") {
      playerSelection = "rock";
      roundResults(i, playerSelection, computerSelection);
    } else if (playerSelection === "papers" || playerSelection === "paper") {
      playerSelection = "paper";
      roundResults(i, playerSelection, computerSelection);
    } else if (
      playerSelection === "scissors" ||
      playerSelection === "scissor"
    ) {
      playerSelection = "scissor";
      roundResults(i, playerSelection, computerSelection);
    } else if (playerSelection === null) {
      if (askToQuit()) {
        return;
      } else {
        i--;
      }
    } else {
      console.log("Invalid Input");
      i--;
    }
  }
  scoreCard();
  playRequest();
}

function askToQuit() {
  let choice = window.confirm("Do you want to quit?");
  if (choice === true) {
    return choice;
  } else {
    return choice;
  }
}

function playerPlay() {
  let playerSelected = prompt(`
  Rock - Paper - Scissors game.

  Rock beats Scissors / Scissors beats Paper / Paper beats Rock.

  Type your choice:
  `);
  if (playerSelected && playerSelected !== null) {
    return playerSelected.toLowerCase().replace(/\s+/g, "");
  } else if (playerSelected === null) {
    return null;
  }
}

const playRequest = function () {
  if (window.confirm("Do you want to play another game?")) {
    playerScore = 0;
    computerScore = 0;
    return game();
  } else {
    console.log(`Final Results:
    Current Game: ${message}

    Total Game Wins by Player: ${playerWins} 
    Total Game Wins by Computer: ${computerWins}
    `);

    alert(`
       Thank You for playing!
       
       The game score is: 
       Player: ${playerScore} - Computer: ${computerScore}
       Current Game: ${message}

       Total Game Wins by Player: ${playerWins} 
       Total Game Wins by Computer: ${computerWins}
       
       ${finalWinner()}`);
  }
};

function scoreCard() {
  if (playerScore > computerScore) {
    message = "Congratulations! You won the game!!!";
    console.log(message);
    console.log(
      `Current game Score: Player: ${playerScore} Computer: ${computerScore}`
    );
    playerWins++;
  } else if (playerScore === computerScore) {
    message = `You tied with the Computer. Try Again!`;
    console.log(
      `Current game Score: Player: ${playerScore} Computer: ${computerScore}`
    );
    console.log(message);
  } else {
    message = "Loser! Computer wins the game ;(";
    console.log(
      `Current game Score: Player: ${playerScore} Computer: ${computerScore}`
    );
    console.log(message);
    computerWins++;
  }
}

function finalWinner() {
  if (playerWins > computerWins) {
    return `Final Result: You won the majority of games!`;
  } else if (computerWins > playerWins) {
    return `Final Result: Computer won the majority of games!`;
  } else {
    return `Final Result: You and Computer Tied!`;
  }
}

function roundResults(gameNumber, playerSelection, computerSelection) {
  console.log(`Round: ${gameNumber}
  Player selection is: ${playerSelection}
  Computer selection is: ${computerSelection}`);
  console.log(playRound(playerSelection, computerSelection));
}

game();
