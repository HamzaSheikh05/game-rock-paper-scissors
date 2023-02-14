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

function playerPlay() {
  let playerSelection = prompt("Choose wisely: Rock, Paper or Scissors");
  playerSelection = playerSelection.toLowerCase().replace(/\s+/g, "");
  if (playerSelection === "rocks" || playerSelection === "rock") {
    return (playerSelection = "rock");
  } else if (playerSelection === "papers" || playerSelection === "paper") {
    return (playerSelection = "paper");
  } else if (playerSelection === "scissors" || playerSelection === "scissor") {
    return (playerSelection = "scissor");
  }
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
    if (
      playerSelection == "rock" ||
      playerSelection == "paper" ||
      playerSelection == "scissor"
    ) {
      roundResults(i, playerSelection, computerSelection);
    } else {
      console.log("Invalid Entry");
      i--;
    }
  }
  scoreCard();
  playRequest();
}

const playRequest = function () {
  if (window.confirm("Do you want to play another game?")) {
    playerScore = 0;
    computerScore = 0;
    return game();
  } else {
    alert(`Thank You for playing!
       The game score is: 
       Player: ${playerScore} - Computer: ${computerScore} 
       Total Game Wins by Player: ${playerWins} 
       Total Game Wins by Computer: ${computerWins}
       Current Game: ${message}
       
       ${finalWinner()}`);
  }
};

function scoreCard() {
  if (playerScore > computerScore) {
    message = "Congratulations! You won the game!!!";
    console.log(message);
    playerWins++;
  } else if (playerScore === computerScore) {
    message = `You tied with the Computer. Try Again!`;
    console.log(message);
  } else {
    message = "Loser! Computer wins the game ;(";
    console.log(message);
    computerWins++;
  }
}

function finalWinner() {
  if (playerWins > computerWins) {
    return `Final Winner: You won the majority of games!`;
  } else if (computerWins > playerWins) {
    return `Final Winner: Computer won the majority of games!`;
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

function doubleConfirmation() {
  if (window.confirm("Do you really want to quit?")) {
    console.log("Sorry to see you go ;(");
  } else {
    gameRequest();
  }
}

function gameRequest() {
  if (window.confirm("Would you like to play a GAME: Rock, Paper, Scissors?")) {
    game();
  } else {
    doubleConfirmation();
  }
}

gameRequest();
