
const paper = document.querySelector('#paper');
paper.addEventListener('click',() => {
     returnResults('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click',() => {
    returnResults('scissors');
});

const rock = document.querySelector('#rock');
rock.addEventListener('click',() => {
    returnResults('rock');
});


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  

function genComputerChoice(){
    const choice = randomIntFromInterval(1,3);
    if (choice === 1){
        return 'paper';
    }
    else if(choice === 2){
        return 'scissors';
    }
    else{
        return 'rock';
    }

}

function playGame(playerChoice, computerChoice){
    if (playerChoice === 'paper'){
        if(computerChoice === 'paper'){
            return 'drawn';
        }
        else if(computerChoice === 'scissors'){
            return 'lost';
        }
        else{
            return 'won';
        }
    }
    else if (playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            return 'won';
        }
        else if(computerChoice === 'scissors'){
            return 'drawn';
        }
        else{
            return 'lost';
        }
    }
    else{
        if(computerChoice === 'paper'){
            return 'lost';
        }
        else if(computerChoice === 'scissors'){
            return 'won';
        }
        else{
            return 'drawn';
        }
    }
}

function increaseScore(player){
    const scoreText = document.querySelector(player);
    const currentScore = parseInt(scoreText.textContent);
    const newScore = currentScore + 1;
    scoreText.textContent = newScore;
}


function returnResults(playerChoice){
    const computerChoice = genComputerChoice();
    const result = playGame(playerChoice, computerChoice);

    const resultsText = document.querySelector('.results');
    resultsText.textContent = "You chose " + playerChoice + " and the computer chose " +  computerChoice + ". You have " + result;
    if(result === 'won'){
        increaseScore('.playerScore');
    }
    else if(result === 'lost'){
        increaseScore('.computerScore');
    }
}

