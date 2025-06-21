// console.log("hello world!")
function getComputerChoice(){
    const computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return "rock";
    } else if (computerChoice < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

function getHumanChoice(){
    const humanChoice = prompt("Enter your choice (rock, paper, scissors):");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if(humanChoice == computerChoice){
        console.log("It's a tie!");
        
    } else if(humanChoice =="rock"  && computerChoice == "scissors" || humanChoice == "scissors"&& computerChoice == "paper"
        || humanChoice == "paper" && computerChoice == "rock"){

            console.log("i won the game against the computer!");
            humanScore++;
        }
    else {
        console.log("the computer won the game!");
        computerScore++;
    }
    
}


function playGame(){
    
    for(let i = 0 ; i<=5 ; i ++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection,computerSelection)
        
     
    }
    console.log("Final Scores:");
        console.log("You:", humanScore);
        console.log("Computer:", computerScore);

        if (humanScore > computerScore) {
            console.log("🎉 You won the game!");
    }   else if (computerScore > humanScore) {
            console.log("💻 The computer won the game!");
    }   else {
            console.log("🤝 It's a tie!");
    }
   
}
playGame();

