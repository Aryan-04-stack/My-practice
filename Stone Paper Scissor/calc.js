let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showWinner= (userWin,userChoice,compChoice) => {
    if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!, Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
    msg.innerText = `You Lose , ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "Red"
    }
}

const DrawGame = () =>{
    msg.innerText = "This Game Is Draw";
    msg.style.backgroundColor = "blue"
}
const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
};

const playGame = (userChoice) => {     // user choice comes from end
    //Generate Computer choice
    const compChoice = genCompChoice();

    if(userChoice=== compChoice){
        DrawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }

        showWinner(userWin , userChoice , compChoice)
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

