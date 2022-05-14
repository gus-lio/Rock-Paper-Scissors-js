//Rock Paper Scissors//
let playerScore = 0;
let computerScore = 0;

function game(){
    //Random Computer Selection
    const rockPapScis = ["rock", "paper", "scissors"];
    const computerPlay = Math.floor(Math.random() * rockPapScis.length);
    computerSelection = (rockPapScis[computerPlay]);
    //Player Selection
    const playerSelection = window.prompt("Play Rock, Paper, Scissors - Enter Your Selection - Best of Five");
    //Round of Play
    function playRound(playerSelection, computerSelection) {
        if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
            playerScore++;        
            return("Rock beats scissors. You Win!");
        } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
            computerScore++;
            return("Paper beats rock. You Lose.");
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
            playerScore++;
            return("Scissors beats paper. You Win!");
        } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
            computerScore++;
            return("Rock beats scissors. You Lose.");
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
            playerScore++;
            return("Paper beats rock. You Win!");
        } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
            computerScore++;
            return("Scissors beats paper. You Lose.");        
        } else if (playerSelection.toLowerCase() === computerSelection) {
            return("Tie. Try Again.")
        }
    }
    //Round Results
    console.log(playRound(playerSelection,computerSelection));
    console.log(("Your Score = ") + playerScore);
    console.log(("Computer Score = ") + computerScore);
}
//Loop to Play Five Rounds
for (let i = 0; i < 5; i++) {
    game();
 }
 //Final Score Tally
console.log(("Your Final Score = ") + playerScore);
console.log(("Computer's Final Score = ") +computerScore);
//Final Win or Lose Message
function whoWins(playerScore, computerScore){
    if (playerScore > computerScore) {
        return("You Win! Nice!");
    } else if (playerScore < computerScore) {
        return("You Lose. Refresh To Try Again!");
    } else if (playerScore === computerScore) {
        return("Tie Game! Refresh To Try Again!");
    }
}
console.log(whoWins(playerScore, computerScore));
