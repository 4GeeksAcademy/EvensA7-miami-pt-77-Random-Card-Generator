import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard()
  console.log("Hello Rigo from the console!");
};
const generateCard = ()=> {
  let allSuits = ["♦", "♣", "♥", "♠"];
  let allNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];
  let randomSuit = Math.floor(Math.random() * allSuits.length)
  let randomNumber = Math.floor(Math.random() * allNumbers.length)
  
  let number = allNumbers[randomNumber]
  let suit = allSuits[randomSuit]
  document.querySelector(".Top").innerHTML = suit
  document.querySelector(".Filling").innerHTML = number
  document.querySelector(".Bottom").innerHTML = suit
  document.querySelector(" ").style.color =
}