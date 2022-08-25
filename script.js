document.addEventListener("DOMContentLoaded", start);
console.log("DOM loaded");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
// variabler til den valgte knap + math.Random
var theHand;
var num2;

let rockKnap = document.querySelector(".rock");
let paperKnap = document.querySelector(".paper");
let scissorsKnap = document.querySelector(".scissors");

function start() {
  console.log("start loaded");

  // sæt hidden class på text igen:
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");

  // definer let-knapper som knapperne igen:
  let rockKnap = document.querySelector(".rock");
  let paperKnap = document.querySelector(".paper");
  let scissorsKnap = document.querySelector(".scissors");

  // lyt efter klik på knapper:
  rockKnap.addEventListener("click", handChosen);
  paperKnap.addEventListener("click", handChosen);
  scissorsKnap.addEventListener("click", handChosen);
}

function handChosen() {
  console.log("handChosen loaded");

  // lægger valg af knap ind i var theHand
  theHand = this;
  console.log(theHand);

  // shake hands:
  player1.classList.add("shake");
  player2.classList.add("shake");

  // vent på, shake animation ender
  player1.addEventListener("animationend", showHands);

  // fjern eventlisteners på click:
  document.querySelector(".rock").removeEventListener("click", handChosen);
  document.querySelector(".paper").removeEventListener("click", handChosen);
  document.querySelector(".scissors").removeEventListener("click", handChosen);
}

function showHands() {
  console.log("showHands loaded");

  // fjern "shake":
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  // tilføj rigtigt billede til player1: HVOR FUCK VIRKER DET IKKE???!!!
  if (theHand === scissorsKnap) {
    player1.classList.add("scissors");
  } else if (theHand === paperKnap) {
    player1.classList.add("paper");
  } else {
    player1.classList.add("rock");
  }

  // random math til at vælge computerens hånd 1-3. (1: rock, 2: paper, 3: scissors) +
  // add passende class (fx .paper):
  num2 = Math.floor(Math.random() * 3) + 1;
  console.log(num2);

  if (num2 === 1) {
    player2.classList.add("rock");
  } else if (num2 === 2) {
    player2.classList.add("paper");
  } else {
    player2.classList.add("scissors");
  }

  whoWins();
}

function whoWins() {
  console.log("whoWins loaded");

  rockKnap = 1;
  paperKnap = 2;
  scissorsKnap = 3;

  // if-sætning for at finde vinder:
  // scissor meets scissor. VIRKER
  if (scissorsKnap === num2) {
    document.querySelector("#draw").classList.remove("hidden");
  }
  // scissor meets rock. VIRKER (det hjælper at sætte 2 før 3 i 2 && 3)
  else if (scissorsKnap !== 2 && 3) {
    document.querySelector("#lose").classList.remove("hidden");
  }
  // scissor meets paper. VIRKER
  else if (scissorsKnap !== 1 && 3) {
    document.querySelector("#win").classList.remove("hidden");
  }
  // rock meets rock. VIRKER
  else if (rockKnap === num2) {
    document.querySelector("#draw").classList.remove("hidden");
  }
  // rock meets paper. VIRKER
  else if (rockKnap !== 3 && 1) {
    document.querySelector("#lose").classList.remove("hidden");
  }
  // rock meets scissor.
  else if (rockKnap !== 1 && 2) {
    document.querySelector("#win").classList.remove("hidden");
  }
  // paper meets paper VIRKER IKKE. LOSE?
  else if (paperKnap === num2) {
    document.querySelector("#draw").classList.remove("hidden");
  }
  // paper meets scissors
  else if (paperKnap !== 1 && 3) {
    document.querySelector("#draw").classList.remove("hidden");
  }
  // paper meets rock. VIRKER IKKE. lose
  else if (paperKnap !== 2 && 3) {
    document.querySelector("#win").classList.remove("hidden");
  }

  //start();
}
