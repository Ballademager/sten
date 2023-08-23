"use strict";

const AI = document.querySelector("#player1");
const theUser = document.querySelector("#player2");

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

let aiPoints = 0;
let userPoints = 0;
let pick;

console.log("test1");
// printAiPoints();
// printUserPoints();

btnRock.addEventListener("click", rock);
btnPaper.addEventListener("click", paper);
btnScissors.addEventListener("click", scissors);

function rock() {
  pick = null;

  document.querySelector("#lose").classList = "hidden";
  document.querySelector("#win").classList = "hidden";
  document.querySelector("#draw").classList = "hidden";
  console.log("removed tekst");

  console.log("player chose rock");
  btnRock.removeEventListener("click", rock);
  btnPaper.removeEventListener("click", paper);
  btnScissors.removeEventListener("click", scissors);
  console.log("listeners removed");

  pick = Math.floor(Math.random() * 3 + 1);
  console.log("AI chose", pick, typeof pick);

  AI.classList.add("shake");
  theUser.classList.add("shake");
  theUser.addEventListener("animationend", (e) => {
    theUser.classList.remove("shake");
  });
  AI.addEventListener("animationend", (e) => {
    AI.classList.remove("shake");
    if (pick == 1) {
      AI.classList.add("rock");
      document.querySelector("#draw").classList.remove("hidden");
    } else if (pick == 2) {
      AI.classList.add("paper");
      document.querySelector("#lose").classList.remove("hidden");
      //   addAiPoint();
    } else if (pick == 3) {
      AI.classList.add("scissors");
      document.querySelector("#win").classList.remove("hidden");
      //   addUserPoint();
    }
  });
  btnRock.addEventListener("click", rock);
  btnPaper.addEventListener("click", paper);
  btnScissors.addEventListener("click", scissors);
}

function paper() {
  pick = null;
  document.querySelector("#lose").classList = "hidden";
  document.querySelector("#win").classList = "hidden";
  document.querySelector("#draw").classList = "hidden";
  console.log("removed tekst");

  console.log("player chose paper");
  btnRock.removeEventListener("click", rock);
  btnPaper.removeEventListener("click", paper);
  btnScissors.removeEventListener("click", scissors);
  console.log("listeners removed");

  pick = Math.floor(Math.random() * 3 + 1);
  console.log("AI chose", pick, typeof pick);

  AI.classList.add("shake");
  theUser.classList.add("shake");
  theUser.addEventListener("animationend", (e) => {
    theUser.classList.remove("shake");
    theUser.classList.add("paper");
  });
  AI.addEventListener("animationend", (e) => {
    AI.classList.remove("shake");
    if (pick == 1) {
      AI.classList.add("rock");
      document.querySelector("#win").classList.remove("hidden");
      //   addUserPoint();
    } else if (pick == 2) {
      AI.classList.add("paper");
      document.querySelector("#draw").classList.remove("hidden");
    } else if (pick == 3) {
      AI.classList.add("scissors");
      document.querySelector("#lose").classList.remove("hidden");
      //   addAiPoint();
    }
  });
  btnRock.addEventListener("click", rock);
  btnPaper.addEventListener("click", paper);
  btnScissors.addEventListener("click", scissors);
}

function scissors() {
  pick = null;
  document.querySelector("#lose").classList = "hidden";
  document.querySelector("#win").classList = "hidden";
  document.querySelector("#draw").classList = "hidden";
  console.log("removed tekst");

  console.log("player chose scissors");
  btnRock.removeEventListener("click", rock);
  btnPaper.removeEventListener("click", paper);
  btnScissors.removeEventListener("click", scissors);
  console.log("listeners removed");

  pick = Math.floor(Math.random() * 3 + 1);
  console.log("AI chose", pick, typeof pick);

  AI.classList.add("shake");
  theUser.classList.add("shake");
  theUser.addEventListener("animationend", (e) => {
    theUser.classList.remove("shake");
  });
  AI.addEventListener("animationend", (e) => {
    AI.classList.remove("shake");
    if (pick == 1) {
      AI.classList.add("rock");
      document.querySelector("#lose").classList.remove("hidden");
      //   addAiPoint();
    } else if (pick == 2) {
      AI.classList.add("paper");
      document.querySelector("#win").classList.remove("hidden");
      //   addUserPoint();
    } else if (pick == 3) {
      AI.classList.add("scissors");
      document.querySelector("#draw").classList.remove("hidden");
    }
  });
  btnRock.addEventListener("click", rock);
  btnPaper.addEventListener("click", paper);
  btnScissors.addEventListener("click", scissors);
}
// function printAiPoints() {
//   console.log("print ai points");
//   document.querySelector("#aiPoints").textContent = aiPoints;
// }
// function printUserPoints() {
//   console.log("print user points");
//   document.querySelector("#userPoints").textContent = userPoints;
// }

// function addAiPoint() {
//   console.log("add ai points");
//   aiPoints = aiPoints + 1;
//   printAiPoints();
// }
// function addUserPoint() {
//   console.log("add user points");
//   userPoints = userPoints + 1;
//   printUserPoints();
// }
