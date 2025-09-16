const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container");
let cards;
let interval;
let firstCard = false;
let secondCard = false;

//items array
const items = [
  { name: "girl", image: "img/girl.jpg" },
  { name: "scared", image: "img/scared.jpg" },
  { name: "Screem", image: "img/Screem.jpg" },
  { name: "last", image: "img/last.jpg" },
  { name: "night", image: "img/night.jpg" },
  { name: "seat", image: "img/seat.jpg" },
  { name: "woman", image: "img/woman.jpg" },
  { name: "man", image: "img/man.webp" },
  { name: "Picasso", image: "img/Picasso.jpg" },
  { name: "mona", image: "img/mona.jpg" },
  { name: "Girl2", image: "img/Girl2.jpg" },
  { name: "man2", image: "img/man2.jpg" },
];
