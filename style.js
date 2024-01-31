// variables for DOM elements
const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const game = document.querySelector(".game");
const gameResult = document.querySelector(".game-result");
const computerImage = document.querySelector("#computerImage");
const userImage = document.querySelector("#userImage");
const user = document.querySelector("#user");
const computer = document.querySelector("#computer");
const winner = document.querySelector("#winner");
const playAgain = document.querySelector("#play");
const userwin = document.querySelector("#userwin");
const computerwin= document.querySelector("#computerwin");
const closeBtn = document.getElementById("close-btn");
const gameRules = document.querySelector(".game-rules");
const ruleButton = document.querySelector("#rule-btn");
const nextButton = document.querySelector("#next-btn");

//getting score from local storage
var y_Score = localStorage.getItem("y_Score") || 0;
var comp_Score = localStorage.getItem("comp_Score") || 0;

// update score to score board
yourScore.innerText = y_Score;
computerScore.innerText = comp_Score;

var yourChoice;
var computerChoice;


//restart
const restart=()=>{
    gameResult.style.display="none";
    game.style.display="flex";
    user.classList.remove(`${yourChoice}`);
    userImage.src = "";
    computerImage.src = "";
    computer.classList.remove(`${computerChoice}`);
    userwin.style.display = "none";
    computerwin.style.display = "none";
    nextButton.style.display="none";
}
// computer random choice
const randomChoice = () => {

    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * array.length)];

};

// user win 
const youWin = () => {

    y_Score++;
    localStorage.setItem("y_Score", `${y_Score}`);
    yourScore.innerText = localStorage.getItem("y_Score");
    winner.innerText = "YOU WIN";
    nextButton.style.display = "block";
    userwin.style.display = "flex";
};

// computer win
const computerWin = () => {

    comp_Score++;
    localStorage.setItem("comp_Score", `${comp_Score}`);
    computerScore.innerText = localStorage.getItem("comp_Score");
    winner.innerText = "YOU LOST";
    nextButton.style.display = "none";
    computerwin.style.display = "flex";
  };

//   tieUp
  const tieUp = () => {

    winner.textContent = "TIE UP";
    playAgain.innerText = "REPLAY";
    userwin.style.display = "none";
    computerwin.style.display = "none";

  };

rock.addEventListener("click", () => {

    game.style.display = "none";
    gameResult.style.display = "flex";
    yourChoice = "rock";
    computerChoice = randomChoice();
    computerImage.src = `assets/${computerChoice}.svg`;
    computer.classList.add(`${computerChoice}`);
    userImage.src = `assets/${yourChoice}.svg`;
    user.classList.add(`${yourChoice}`);

    if (computerChoice === "scissors") {
        youWin();
    } else if (computerChoice === "paper") {
        computerWin();
    } else {
        tieUp();
    }

})

paper.addEventListener("click", () => {

    game.style.display = "none";
    gameResult.style.display = "flex";
    yourChoice = "paper";
    computerChoice = randomChoice();
    computerImage.src = `assets/${computerChoice}.svg`;
    computer.classList.add(`${computerChoice}`);
    userImage.src = `assets/${yourChoice}.svg`;
    user.classList.add(`${yourChoice}`);

    if (computerChoice === "rock") {
        youWin();
    } else if (computerChoice === "scissors") {
        computerWin();
    } else {
        tieUp();
    }

})

scissors.addEventListener("click", () => {

    game.style.display = "none";
    gameResult.style.display = "flex";
    yourChoice = "scissors";
    computerChoice = randomChoice();
    computerImage.src = `assets/${computerChoice}.svg`;
    computer.classList.add(`${computerChoice}`);
    userImage.src = `assets/${yourChoice}.svg`;
    user.classList.add(`${yourChoice}`);

    if (computerChoice === "paper") {
        youWin();
    } else if (computerChoice === "rock") {
        computerWin();
    } else {
        tieUp();
    }

})


playAgain.addEventListener("click",()=>{
    restart();
})


closeBtn.addEventListener("click", () => {
        gameRules.style.display = "none"; 
})

ruleButton.addEventListener("click", () => {
    gameRules.style.display = "block";
})