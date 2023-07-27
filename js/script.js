let userScore = 0;
let computerScore = 0;
// VARIABLES FOR USERINPUT
let btnContainer = document.querySelector(".container");
let gameBtns = document.querySelectorAll(".container button");
let resetBtn = document.querySelector(".btn-reset");
// ROCK PAPER SCISSORS IMAGE VARIABLES
let playerImage = document.createElement("img");
let playerOutput = document.querySelector(".player-output");
let computerImage = document.createElement("img");
let computerOutput = document.querySelector(".computer-output");
// OUTPUT SCORE VARIABLES
let message = document.querySelector(".message");
let playerNumScore = document.querySelector(".player-score");
let computerNumScore = document.querySelector(".computer-score");

// CLICK EVENT HANDLER FOR BUTTONS ARE APPLIED TO THE CONTAINER
btnContainer.addEventListener("click", playRound);

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  playerImage.src = "";
  computerImage.src = "";
  gameBtns.forEach((item) => (item.disabled = false));
  playerNumScore.textContent = userScore;
  computerNumScore.textContent = computerScore;
  message.textContent = "";
});

function getComputerChoice() {
  // RETURN RANDOM NUMBER BETWEEN 1 AND 3 AND STORE IN A VARIABLE
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) return "Rock";
  else if (randNum === 2) return "Paper";
  else return "Scissors";
}

function getImage(userChoice, computerChoice) {
  playerImage.src = `images/${userChoice}.png`;
  playerOutput.appendChild(playerImage);
  computerImage.src = `images/${computerChoice}.png`;
  computerOutput.appendChild(computerImage);
}

function playRound(e) {
  let playerSelection = e.target.textContent.toLowerCase();
  let computerSelection = getComputerChoice();

  if (playerSelection === "rock" && computerSelection === "Rock") {
    getImage("rock", "rock");
    message.textContent = "It's a tie! Rock against rock.";
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    computerScore++;
    getImage("rock", "paper");
    message.textContent = "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    userScore++;
    getImage("rock", "scissors");
    message.textContent = "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    userScore++;
    getImage("paper", "rock");
    message.textContent = "You Win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    getImage("paper", "paper");
    message.textContent = "It's a tie! Paper against paper.";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    computerScore++;
    getImage("paper", "scissors");
    message.textContent = "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    computerScore++;
    getImage("scissors", "rock");
    message.textContent = "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    userScore++;
    getImage("scissors", "paper");
    message.textContent = "You Win! Scissors beats paper.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    getImage("scissors", "scissors");
    message.textContent = "It's a tie! Scissor against scissor.";
  }
  // DISPLAY USER AND COMPUTER SCORE UPON CLICKING A BTN
  playerNumScore.textContent = userScore;
  computerNumScore.textContent = computerScore;
  // DISPLAY WHO REACHED 5 POINTS AND DISABLE BTNS
  if (userScore === 5) {
    message.textContent = "You won! Grats.";
    gameBtns.forEach((item) => (item.disabled = true));
  } else if (computerScore === 5) {
    message.textContent = "You lost. Try again?";
    gameBtns.forEach((item) => (item.disabled = true));
  }
}
