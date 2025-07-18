function getComputerChoice() {

    let x = Math.random();

    if (x <1/3) {
        return "rock";
    }
    else if (x<2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

//console.log(getComputerChoice());

function getHumanChoice() {
    return prompt("Enter your choice:");
}

//console.log(getHumanChoice());


 



function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;
   
    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("Paper beats Rock! You Win!");
            alert("Paper beats Rock! You Win!");
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("Rock crushes Scissors! You Win!");
            alert("Rock crushes Scissors! You Win!");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Scissors cut Paper! You Win!");
            alert("Scissors cut Paper! You Win!");
            humanScore++;
        }
        else if (humanChoice === computerChoice) {
            console.log("It's a Tie!");
            alert("It's a Tie!");
        }

        else {
            console.log("Computer Wins!");
            alert("Computer Wins!");
            computerScore++;

        }
    }


    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }

    if (humanScore > computerScore) {
        console.log("Wohoo! You Won!");
        alert(`Wohoo! You Won! the final score is You : ${humanScore}, Computer :${computerScore}`);

    }
    else if (humanScore === computerScore) {
        console.log("It's a Tie!");
        alert(`It's a Tie! the final score is You : ${humanScore}, Computer :${computerScore} Refresh to play again!`);
    }
    else {
        console.log("Oops! You Lost!");
        alert(`Oops! You Lost! the final score is You : ${humanScore}, Computer :${computerScore}`);
    }





}


playGame();
