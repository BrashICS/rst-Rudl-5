const grid = 5;
const colors = ["red", "green", "blue", "yellow"];

let MD = false;
let currentSrc = ""

container=document.getElementById('container');
console.log(document.getElementById("container").children)

grid_container = []

for(docks = 0; docks < container.children.length; docks++) {
grid_container.push(container.children[docks])
}

console.log(grid);

document.onmouseup = reset

const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let startTime;
let elapsedTime = 0;
let intervalId;
let score = 0;

function updateTimer() {
  const now = Date.now();
  elapsedTime = now - startTime;
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  startTime = Date.now() + 5 * 60 * 1000;
  intervalId = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

// Increase score
function increaseScore() {
  score++;
  scoreDisplay.innerText = `Score: ${score}`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);



const gridContaner = document.querySelector(".grid");


function createGrid() {
const grid = document.getElementById("div");
grid.classList.add("grid-item");
}


function mousedown(e) {
  console.log("hello");
  MD = true;
  currentSrc = e.children[0].src
}

function mouseenter(e) {
  console.log(e.children);
  if(MD) {
  e.children[0].src = currentSrc
  }

}

function reset() {
  MD = false;
  currentSrc = ""
}



