let userScore = 0;
let computerScore = 0;

let btnContainer = document.querySelector(".container");

let playerImage = document.createElement("img");
let playerOutput = document.querySelector(".player-output");

let computerImage = document.createElement("img");
let computerOutput = document.querySelector(".computer-output");

let message = document.querySelector(".message");
let playerNumScore = document.querySelector(".player-score");
let computerNumScore = document.querySelector(".computer-score");

let gameBtns = document.querySelectorAll(".container button");
let resetBtn = document.querySelector(".btn-reset");

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

function playRound(e) {
  let playerSelection = e.target.textContent.toLowerCase();
  let computerSelection = getComputerChoice();

  if (playerSelection === "rock" && computerSelection === "Rock") {
    playerImage.src = "images/rock.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/rock.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "It's a tie! Rock against rock.";
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    computerScore++;
    playerImage.src = "images/rock.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/paper.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    userScore++;
    playerImage.src = "images/rock.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/scissors.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    userScore++;
    playerImage.src = "images/paper.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/rock.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "You Win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    playerImage.src = "images/paper.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/paper.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "It's a tie! Paper against paper.";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    computerScore++;
    playerImage.src = "images/paper.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/scissors.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    computerScore++;
    playerImage.src = "images/scissors.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/rock.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    userScore++;
    playerImage.src = "images/scissors.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/paper.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "You Win! Scissors beats paper.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    playerImage.src = "images/scissors.png";
    playerOutput.appendChild(playerImage);
    computerImage.src = "images/scissors.png";
    computerOutput.appendChild(computerImage);
    message.textContent = "It's a tie! Scissor against scissor.";
  }
  playerNumScore.textContent = userScore;
  computerNumScore.textContent = computerScore;
  if (userScore === 5) {
    message.textContent = "You won! Grats.";
    gameBtns.forEach((item) => (item.disabled = true));
  } else if (computerScore === 5) {
    message.textContent = "You lost. Try again?";
    gameBtns.forEach((item) => (item.disabled = true));
  }
}

// function game() {
//   // LOOP 5 TIMES THE GAME FUNCTION
//   for (let i = 1; i <= 5; i++) {
//     // RETURN USER STRING VIA PROMPT IN ALL LOWER CASE AND STORE IN A VAR
//     let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
//     // RETURN RANDOM STRING OF 3 DETERMINED POSSIBILITIES VIA GETCOMPUTERCHOICE FUNC AND STORE IN A VAR
//     let computerSelection = getComputerChoice();
//     // OUTPUT RESULTS TO THE CONSOLE
//     console.log(`Game ${i} of 5:

//                 You chose - ${playerSelection}
//                 Your opponent chose - ${computerSelection}

//                 ${playRound(playerSelection, computerSelection)}
//                 You - ${userScore} vs Computer - ${computerScore}`);
//   }
// }
