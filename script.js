let playerScore = 0;
let computerScore = 0;
let message = "";
let playerWins = 0;
let computerWins = 0;
let again = false;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissor"];
  const computerHand =
    choices[Math.floor(Math.random() * choices.length)].toLowerCase();
  return computerHand;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playerScore;
    computerScore;
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
    let playerSelection = prompt("Rock, Paper or Scissors")
      .toLowerCase()
      .replace(/\s+/g, "");

    if (playerSelection === "rocks" || playerSelection === "rock") {
      playerSelection = "rock";
      console.log(`Round: ${i}
      Player selection is: ${playerSelection}
      Computer selection is: ${computerSelection}`);
      console.log(playRound(playerSelection, computerSelection));
    } else if (playerSelection === "papers" || playerSelection === "paper") {
      playerSelection = "paper";
      console.log(`Round: ${i}
      Player selection is: ${playerSelection}
      Computer selection is: ${computerSelection}`);
      console.log(playRound(playerSelection, computerSelection));
    } else if (
      playerSelection === "scissors" ||
      playerSelection === "scissor"
    ) {
      playerSelection = "scissor";
      console.log(`Round: ${i}
      Player selection is: ${playerSelection}
      Computer selection is: ${computerSelection}`);
      console.log(playRound(playerSelection, computerSelection));
    } else {
      console.log("Invalid Entry");
      i--;
    }
  }
  scoreCard();

  playerScore = 0;
  computerScore = 0;
}

const playRequest = function () {
  if (playAgain()) {
    playerScore = 0;
    computerScore = 0;
    return game();
  } else {
    alert(`Thank You for playing!
       The Round score is: 
       Player: ${playerScore} - Computer: ${computerScore} 
       Total Game Wins by Player: ${playerWins} 
       Total Game Wins by Computer: ${computerWins}
       Current Game: ${message}
       
       ${finalWinner()}`);
  }
};

function scoreCard() {
  if (playerScore > computerScore) {
    message = "Congratulations! You won the current game!!!";
    console.log(message);
    playerWins++;
    //playRequest();
  } else if (playerScore === computerScore) {
    message = `You tied with the Computer. Try Again!`;
    console.log(message);
    //playRequest();
  } else {
    message = "Loser! Computer wins the current game ;(";
    console.log(message);
    computerWins++;
    //playRequest();
  }
  playRequest();
}

function finalWinner() {
  if (playerWins > computerWins) {
    return `You won the majority of games!`;
  } else if (computerWins > playerWins) {
    return `Computer won the majority of games!`;
  } else {
    return `You and Computer Tied!`;
  }
}

const playAgain = function () {
  return window.confirm("Do you want to play another round?");
};
// Starts the game
game();