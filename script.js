

function playRound(){
    playerSelection = prompt("Please enter your choice of move");
    computerSelection = getComputerChoice();
    let text = "Player: " + playerSelection + ", Computer: " + computerSelection;
    if (playerSelection === computerSelection){
        return text + ", Draw";
    }
    else if(playerSelection === "rock" && computerSelection == "scissors" ||
            playerSelection === "paper" && computerSelection == "rock" ||
            playerSelection === "scissors" && computerSelection == "paper"){
            return text + ", You Win!";
    }
    else if(playerSelection === "rock" && computerSelection == "paper" ||
            playerSelection === "paper" && computerSelection == "scissors" ||
            playerSelection === "scissors" && computerSelection == "rock"){
            return text + ", You Lose Dickhead!";
    }
    else{
        return text;
    }
}

function getComputerChoice(){
let pick = Math.floor(Math.random() * 3);
    if(pick == 0){
        return "rock";
    }
    else if(pick == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}


/*
let rockCount = 0;
let paperCount = 0;
let scissorsCount = 0;
for(let i = 0; i < 100; i++){
    let pick = Math.floor(Math.random() * 3);
    if(pick == 0){
        rockCount++;
    }
    else if(pick == 1){
        paperCount++;
    }
    else{
        scissorsCount++;
    }
}
console.log("Rock: " + rockCount + "\n");
console.log("Paper: " + paperCount + "\n");
console.log("Scissors: " + scissorsCount + "\n");


console.log(playRound());
*/

