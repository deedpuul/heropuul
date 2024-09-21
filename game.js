let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // Excessing the elment id, class
const msg = document.querySelector("#msg"); // Excessing the elment id, class

const userScorePara = document.querySelector("#user-score"); // Excessing the elment id, class
const compScorePara = document.querySelector("#comp-score"); // Excessing the elment id, class

const genCompchoice = () => {
  // Generating computer choice
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); // Math function for generating decimal number and math.floor for the removing the decimal number.
  return options[randIdx];
  // rock, paper, scissors
};

const drawGame = () => {
  //console.log("Game was Draw");
  msg.innerText = "GAME WAS DRAW. PLAY AGAIN!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("You win");
    msg.innerText = `YOU WIN! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("You lose");
    msg.innerText = `YOU LOST! Your ${compChoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  // console.log("user choice = ", userchoice);
  //Generate computer choice -> modulaar
  const compChoice = genCompchoice();
  console.log("comp choice= ", compChoice);

  if (userchoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      // rock ,scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  //console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    console.log("choice was clicked", userchoice);
    playGame(userchoice);
  });
});
