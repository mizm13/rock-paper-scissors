function getComputerChoice() {
  const value = Math.floor(Math.random() * 3);

  if (value == 0) {
    return "Rock";
  } else if (value == 1) {
    return "Scissors";
  } else return "Paper";
}
//console.log(getComputerChoice());
var count = 0;
var computerScore = 0;
var playerScore = 0;

function playRound(playerSelection, computerSelection) {
  console.log(count);
  //console.log(computerSelection, "test");

  if (playerSelection == "Rock" && computerSelection == "Rock") {
    //playRound(); //called if its a tie

    const valueAgainForTie = prompt(
      "Enter Again due to Tie Rock, Paper, or Scissors: "
    );
    return playRound(valueAgainForTie, getComputerChoice());

    //return "It's a Tie";
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    //playRound(); //called if its a tie
    const valueAgainForTie = prompt(
      "Enter Again due to Tie Rock, Paper, or Scissors: "
    );
    return playRound(valueAgainForTie, getComputerChoice());

    //return "It's a Tie";
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    // playRound(); //called if its a tie
    const valueAgainForTie = prompt(
      "Enter Again due to Tie Rock, Paper, or Scissors: "
    );
    return playRound(valueAgainForTie, getComputerChoice());

    //return "It's a Tie";
  }
  //For Ties
  else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  }
  //For Rock beating or losing
  else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerScore++;

    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;

    return "You Win! Paper beats Rock";
  }
  // For Paper beating or losing
  else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++;

    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerScore++;

    return "You Lose! Rock beats Scissors";
  }
  // For Scissors beating or losing
  else return "Error";
}
/*
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(computerSelection, "abcd");

console.log(playRound(playerSelection, computerSelection));

*/
function game() {
  for (let i = 0; i <= 4; i++) {
    count++;
    const userInfo = prompt("Enter Rock, Paper, or Scissors: ");
    console.log("User picked = ", userInfo);
    const computerSelection1 = getComputerChoice();
    console.log("Computer picked = ", computerSelection1);
    console.log(playRound(userInfo, computerSelection1));
  }
}

game();
console.log("Player Score = ", playerScore);
console.log("Computer Score = ", computerScore);
