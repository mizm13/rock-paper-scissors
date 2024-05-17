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

    return "Tie";
    /*
    const h2 = document.createElement("h2");
  h2.textContent = "You Played Rock and Computer played Rock. \n Outcome: Tie" ;
  console.log(h2);

  const div =document.querySelector("div");
  div.appendChild(h2);
  */





    /*
    const valueAgainForTie = prompt(
      "Enter Again due to Tie Rock, Paper, or Scissors: "
    );
    return playRound(valueAgainForTie, getComputerChoice());
    */

    //return "It's a Tie";
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    //playRound(); //called if its a tie

    return "Tie";

    /*
    const h2 = document.createElement("h2");
  h2.textContent = "You Played Paper and Computer played Paper. \n Outcome: Tie" ;
  console.log(h2);

  const div =document.querySelector("div");
  div.appendChild(h2);
  */

    /*
    const valueAgainForTie = prompt(
      "Enter Again due to Tie Rock, Paper, or Scissors: "
    );
    return playRound(valueAgainForTie, getComputerChoice());
    */

    //return "It's a Tie";
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    // playRound(); //called if its a tie
    return "Tie";


    /*
    const h2 = document.createElement("h2");
  h2.textContent = "You Played Scissors and Computer played Scissors. \n Outcome: Tie" ;
console.log(h2);
  const div =document.querySelector("div");
  div.appendChild(h2);
  */


    /*
    const valueAgainForTie = prompt(
      "Enter Again due to Tie Rock, Paper, or Scissors: "
    );
    return playRound(valueAgainForTie, getComputerChoice());
    */

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
/*
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
*/

//game();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", (e)=>
{
  //console.log("player: " , e.value);

  const computerSelection1 = getComputerChoice();
  console.log("Computer: ", computerSelection1);


  const outcome = playRound("Rock", computerSelection1)
  const h4 = document.createElement("h4");
  h4.textContent = "You Played Rock and Computer played " + computerSelection1 + ". \n Outcome: " + outcome ;

  const div =document.querySelector("div");
  div.appendChild(h4); //adding the h4 element created to div tag

  const score = document.querySelector("#score"); 
  score.textContent = "PlayerScore: " + playerScore + "   ComputerScore: " + computerScore; //displays player & computer score


  if(playerScore == 5)
  { 
    console.log("You win"); //checks if player won
    score.textContent = "PlayerScore: " + playerScore + "   ComputerScore: " + computerScore; //displays player & computer score & who won
    const winMsg = document.createElement("h4");
    winMsg.textContent = "You Win!";
    score.appendChild(winMsg); //display win msg after score counter
    //return "You win";
  }
  else if (computerScore == 5)
  { 
    console.log("Computer wins");
    score.textContent = "PlayerScore: " + playerScore + "   ComputerScore: " + computerScore; //displays player & computer score & who won
    const winMsg = document.createElement("h4");
    winMsg.textContent = "Computer Win!";
    score.appendChild(winMsg); //display win msg after score counter

  }
});

paper.addEventListener("click", (e)=> 
{
  console.log(e.id);

  const computerSelection1 = getComputerChoice();

  const outcome = playRound("Paper", computerSelection1)
  const h4 = document.createElement("h4");
  h4.textContent = "You Played Paper and Computer played " + computerSelection1 + ". \n Outcome: " + outcome ;

  const div =document.querySelector("div");
  div.appendChild(h4); //adding the h4 element created to div tag

  const score = document.querySelector("#score"); 
  score.textContent = "PlayerScore: " + playerScore + "     ComputerScore: " + computerScore; //displays player & computer score


  if(playerScore == 5)
  { 
    console.log("You win"); //checks if player won
    score.textContent = "PlayerScore: " + playerScore + "   ComputerScore: " + computerScore; //displays player & computer score & who won
    const winMsg = document.createElement("h4");
    winMsg.textContent = "You Win!";
    score.appendChild(winMsg); //display win msg after score counter

  }
  else if (computerScore == 5) 
  {
    console.log("Computer wins");
    score.textContent = "PlayerScore: " + playerScore + "   ComputerScore: " + computerScore; //displays player & computer score & who won
    const winMsg = document.createElement("h4");
    winMsg.textContent = "Computer Win!";
    score.appendChild(winMsg); //display win msg after score counter

  }
});


scissors.addEventListener("click", (e) => 
{
  console.log(e.id);
  const computerSelection1 = getComputerChoice();

  const outcome = playRound("Scissors", computerSelection1)
  const h4 = document.createElement("h4");
  h4.textContent = "You Played Scissors and Computer played " + computerSelection1 + ". \n Outcome: " + outcome ;

  const div =document.querySelector("div");
  div.appendChild(h4); //adding the h4 element created to div tag

  const score = document.querySelector("#score"); 
  score.textContent = "PlayerScore: " + playerScore + "    ComputerScore: " + computerScore; //displays player & computer score


  if(playerScore == 5)
  { 
    console.log("You win"); //checks if player won
    score.textContent = "PlayerScore: " + playerScore + "   ComputerScore: " + computerScore; //displays player & computer score & who won
    const winMsg = document.createElement("h4");
    winMsg.textContent = "You Win!";
    score.appendChild(winMsg);
    //return "You win";
  }
  else if (computerScore == 5)
  {
     console.log("Computer wins");
     score.textContent = "PlayerScore: " + playerScore + "   ComputerScore: " + computerScore; //displays player & computer score & who won
     const winMsg = document.createElement("h4");
     winMsg.textContent = "Computer Win!";
     score.appendChild(winMsg); //display win msg after score counter

  }//return "Computer Wins";

});


//console.log("Player Score = ", playerScore);
//console.log("Computer Score = ", computerScore);
