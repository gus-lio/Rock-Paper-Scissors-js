//Rock Paper Scissors//
var playerScore = 0;
var computerScore = 0;
var round = 0;
var playerSelection = "";
var computerSelection = "";
const roundNumber = document.getElementById('roundNumber');
const resultsContainer = document.getElementById('container-results');
const usrScore = document.getElementById('usrScore');
const compScore = document.getElementById('compScore');
const winLose = document.getElementById('winLose');
//Random Computer Selection
const rockPapScis = ["rock", "paper", "scissors"];
function compRandom(){
    var computerPlay = Math.floor(Math.random() * rockPapScis.length);
    computerSelection = (rockPapScis[computerPlay]);
};
//Round of Play
function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === "rock") && computerSelection === "scissors") {
        playerScore++;        
        return("Rock beats scissors. You Win!");
    } else if ((playerSelection.toLowerCase() === "rock") && computerSelection === "paper") {
        computerScore++;
        return("Paper beats rock. You Lose.");
    } else if ((playerSelection.toLowerCase() === "scissors") && computerSelection === "paper") {
        playerScore++;
        return("Scissors beats paper. You Win!");
    } else if ((playerSelection.toLowerCase() === "scissors") && computerSelection === "rock") {
        computerScore++;
        return("Rock beats scissors. You Lose.");
    } else if ((playerSelection.toLowerCase() === "paper") && computerSelection === "rock") {
        playerScore++;
        return("Paper beats rock. You Win!");
    } else if ((playerSelection.toLowerCase() === "paper") && computerSelection === "scissors") {
        computerScore++;
        return("Scissors beats paper. You Lose.");        
    } else if ((playerSelection.toLowerCase()) === computerSelection) {
        return("Tie. Try Again.");
    }; 
};
function addRounds(){
    round++;
    roundNumber.textContent = round;
}
//Disable buttons, create retry Button
function endGame (){
    document.getElementById("pickRock").disabled = true;
    document.getElementById("pickPaper").disabled = true;
    document.getElementById("pickScissors").disabled = true;
    var x = document.createElement("BUTTON");
    x.setAttribute('id', 'refreshButton');
    x.classList.add('refreshButton');
    var t = document.createTextNode("RETRY");
    x.appendChild(t);
    refresh.appendChild(x);
//Re-enable buttons, start new round
    refreshButton.addEventListener('click', (e) =>{
        playerScore = 0;
        computerScore = 0;
        round = 0;
        usrScore.textContent = playerScore;
        compScore.textContent = computerScore;
        roundNumber.textContent = "";
        resultsContainer.textContent = "";
        winLose.textContent = "";
        document.getElementById("pickRock").disabled = false;
        document.getElementById("pickPaper").disabled = false;
        document.getElementById("pickScissors").disabled = false;
        x.parentNode.removeChild(x);
});
};
//Player Selections
let pickRock = document.getElementById("pickRock");
pickRock.addEventListener('click', (e) =>{
    compRandom();
    resultsContainer.textContent = (playRound("rock", computerSelection));
    usrScore.textContent = playerScore;
    compScore.textContent = computerScore;
    addRounds();
    if (playerScore === 5){
        winLose.textContent = "You Win!";
        endGame();
    } else if (computerScore === 5){
        winLose.textContent = "You Lose!";
        endGame();
    };
});
let pickPaper = document.getElementById("pickPaper");
pickPaper.addEventListener('click', (e) =>{
    compRandom();
    resultsContainer.textContent = (playRound("paper", computerSelection));
    usrScore.textContent = playerScore;
    compScore.textContent = computerScore;
    addRounds();
    if (playerScore === 5){
        winLose.textContent = "You Win!";
        endGame();
    } else if (computerScore === 5){
        winLose.textContent = "You Lose!";
        endGame()};
});
let pickScissors = document.getElementById("pickScissors");
pickScissors.addEventListener('click', (e) =>{
    compRandom();
    resultsContainer.textContent = (playRound("scissors", computerSelection));
    usrScore.textContent = playerScore;
    compScore.textContent = computerScore;
    addRounds();
    if (playerScore === 5){
        winLose.textContent = "You Win!";
        endGame();
    } else if (computerScore === 5){
        winLose.textContent = "You Lose!";
        endGame()};
});

