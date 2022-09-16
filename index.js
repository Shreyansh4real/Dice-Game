var diceImages = [
  "images/dice-01.svg",
  "images/dice-02.svg",
  "images/dice-03.svg",
  "images/dice-04.svg",
  "images/dice-05.svg",
  "images/dice-06.svg",
];
let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });
    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);
    document
      .querySelector(".dice1")
      .setAttribute("src", diceImages[dieOneValue]);
    document
      .querySelector(".dice2")
      .setAttribute("src", diceImages[dieTwoValue]);

    if (dieOneValue > dieTwoValue) {
      document.querySelector("#winner").innerHTML = "🚩 Player 1 Wins";
    } else if (dieOneValue < dieTwoValue) {
      document.querySelector("#winner").innerHTML = "Player 2 Wins 🚩";
    } else {
      document.querySelector("#winner").innerHTML = "Draw";
    }
  }, 1000);
}
