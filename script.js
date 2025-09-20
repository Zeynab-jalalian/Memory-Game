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
  { name: "Screem", image: "img/screem.jpg" },
  { name: "last", image: "img/last.jpg" },
  { name: "night", image: "img/night.jpg" },
  { name: "seat", image: "img/seat.jpg" },
  { name: "woman", image: "img/woman.jpg" },
  { name: "man", image: "img/man.webp" },
  { name: "Picasso", image: "img/Picasso.jpg" },
  { name: "mona", image: "img/mona.jpg" },
  { name: "girl2", image: "img/girl2.jpg" },
  { name: "man2", image: "img/man2.jpg" },
];

//Initial Time
let seconds = 0,
  minutes = 0;
//Initial move and win
let movesCount = 0,
  winCount = 0;

//timer
const timeGenerator = () => {
  seconds += 1;
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
  //format timer before displaying
  let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
};

//for calculating moves
const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

//Pick random objects from the items array
const generateRandom = (size = 4) => {
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);

    tempArray.splice(randomIndex,1);
  }
  return cardValues;
};


const matrixGenerator=(cardValues,size=4)=>{
    gameContainer.innerHTML="";
    cardValues=[...cardValues,...cardValues];
    //shuffle
    cardValues.sort(()=>Math.random() -0.5);
    for(let i=0;i<size*size;i++){
     //before and after(image) card
     gameContainer.innerHTML+=`
     <div class="card-container" data-card-value="${cardValues[i].name}">
     <div class="card-before">?</div>
     <div class="card-after">
     <img src="${cardValues[i].image}" class="image"></div>
     </div>
     </div>
     `;
    }
    //Grid
    gameContainer.style.gridTemplateColumns=`repeat(${size},auto)`;
}

//initialize
const initializer=()=>{
    result.innerText="";
    winCount=0;
    let cardValues=generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
}
initializer();