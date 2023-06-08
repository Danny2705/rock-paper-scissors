document.querySelector(".paper-btn").addEventListener('click', () => {
  playGame('paper');
});

document.querySelector(".rock-btn").addEventListener('click', () => {
  playGame('rock');
});

document.querySelector(".scissors-btn").addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector(".reset_score").addEventListener('click', () => {
  resetScore();
});

const countScore = document.querySelector(".count_score");
let scoreWin = document.getElementById("win-score");
let scoreLose = document.getElementById("lose-score");
let scoreDraw = document.getElementById("draw-score");

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "paper") {
      result = "You win the game!";
    } else if (computerMove === "rock") {
      result = "You lose. Try again!";
    } else if (computerMove === "scissors") {
      result = "Wow it is a draw";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "scissors") {
      result = "You win the game!";
    } else if (computerMove === "paper") {
      result = "You lose. Try again!";
    } else if (computerMove === "rock") {
      result = "Wow it is a draw";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win the game!";
    } else if (computerMove === "scissors") {
      result = "You lose. Try again!";
    } else if (computerMove === "paper") {
      result = "Wow it is a draw";
    }
  }

  if (result === "You win the game!") {
    scoreWin.innerText = parseInt(scoreWin.innerText) + 1;
  } else if (result === "You lose. Try again!") {
    scoreLose.innerText = parseInt(scoreLose.innerText) + 1;
  } else if (result === "Wow it is a draw") {
    scoreDraw.innerText = parseInt(scoreDraw.innerText) + 1;
  }
  saveDatas();

  document.querySelector('.moves').innerHTML = `<div class="score_container">You <img src="images/${playerMove}-emoji.png" class="sub_emoj"> <img src="images/${computerMove}-emoji.png" class="sub_emoj"> Computer</div>`;
  document.querySelector(".result").innerHTML = `<div class="result_text">${result}</div>`;
}

function resetScore () {
  scoreWin.innerText = 0;
  scoreLose.innerText = 0;
  scoreDraw.innerText = 0;
  saveDatas();
}

function saveDatas() {
  const scoreData = {
    win: scoreWin.innerText,
    lose: scoreLose.innerText,
    draw: scoreDraw.innerText
  };
  localStorage.setItem("score", JSON.stringify(scoreData));
}

function show() {
  const scoreData = JSON.parse(localStorage.getItem("score"));
  if (scoreData) {
    scoreWin.innerText = scoreData.win;
    scoreLose.innerText = scoreData.lose;
    scoreDraw.innerText = scoreData.draw;
  }
}
show();



