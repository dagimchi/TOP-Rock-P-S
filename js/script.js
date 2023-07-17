function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) return "Rock";
  else if (randNum === 2) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Rock") {
    return "It's a tie! Rock against rock.";
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    return "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    return "You Win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    return "It's a tie! Paper against paper.";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    return "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beats paper.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    return "It's a tie! Scissor against scissor.";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
