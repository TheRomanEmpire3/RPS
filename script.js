// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 1;
var cScore = 1;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________
function displayChoice(player, img) {
  document.getElementById(player).src = img;
}
function getCompChoice() {
  let num = Math.floor(Math.random() * 3 + 1);
  if (num == 1) {
    displayChoice("computer-choice", "images/rock.png");
    return "rock";
  } else if (num == 2) {
    displayChoice("computer-choice", "images/paper.png");
    return "paper";
  } else {
    displayChoice("computer-choice", "images/scissors.png");
    return "scissors";
  }
}
function getResult(player, comp) {
  if (player == "rock" && comp == "scissors") {
    showResult("player");
  } else if (player == "paper" && comp == "rock") {
    showResult("player");
  } else if (player == "scissors" && comp == "paper") {
    showResult("player");
  } else if (player == "rock" && comp == "paper") {
    showResult("computer");
  } else if (player == "paper" && comp == "scissors") {
    showResult("computer");
  } else if (player == "scissors" && comp == "rock") {
    showResult("computer");
  } else if (player == comp) {
    showResult("tie");
  }
}

function showResult(winner) {
  if (winner == "player") {
    buttonsArea.innerHTML = "Player won ";
    updateScore("player");
  } else if (winner == "computer") {
    buttonsArea.innerHTML = "computer won ";
    updateScore("computer");
  } else if (winner == "tie") {
    buttonsArea.innerHTML = " it was a tie. No one won ";
  }
}
function updateScore(winner2) {
  if (winner2 == "player") {
    playerScoreEl.innerHTML = pScore++;
  } else if (winner2 == "computer") {
    computerScoreEl.innerHTML = cScore++;
  }
}
