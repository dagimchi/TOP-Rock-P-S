let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // RETURN RANDOM NUMBER BETWEEN 1 AND 3 AND STORE IN A VARIABLE
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) return "Rock";
  else if (randNum === 2) return "Paper";
  else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Rock") {
    return "It's a tie! Rock against rock.";
  } else if (playerSelection === "rock" && computerSelection === "Paper") {
    computerScore++;
    return "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    userScore++;
    return "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    userScore++;
    return "You Win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    return "It's a tie! Paper against paper.";
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    computerScore++;
    return "You lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    computerScore++;
    return "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    userScore++;
    return "You Win! Scissors beats paper.";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    return "It's a tie! Scissor against scissor.";
  }
}

function game() {
  // LOOP 5 TIMES THE GAME FUNCTION
  for (let i = 1; i <= 5; i++) {
    // RETURN USER STRING VIA PROMPT IN ALL LOWER CASE AND STORE IN A VAR
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    // RETURN RANDOM STRING OF 3 DETERMINED POSSIBILITIES VIA GETCOMPUTERCHOICE FUNC AND STORE IN A VAR
    let computerSelection = getComputerChoice();
    // OUTPUT RESULTS TO THE CONSOLE
    console.log(`Game ${i} of 5:
            
                You chose - ${playerSelection}
                Your opponent chose - ${computerSelection}
                
                ${playRound(playerSelection, computerSelection)}
                You - ${userScore} vs Computer - ${computerScore}`);
  }
}
