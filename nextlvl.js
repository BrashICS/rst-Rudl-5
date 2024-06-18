const grid = 5;
const colors = ["red", "green", "blue", "yellow"];
let first = -1
let end =-1
let MD = false;
let currentSrc = ""
let colour = ""
let blue_connected = false;
let greeen_connected = false;
let red_connected = false;
let yellow_connected = false;
let orange_connected = false;



container=document.getElementById('container');

grid_container = []

for(docks = 0; docks < container.children.length; docks++) {
grid_container.push(container.children[docks])
}
let gridT = document.getElementById("container").children
console.log(gridT,"hello");
console.log(gridT[0].className[1], "kk")


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


const gridContaner = document.querySelector(".grid");


function createGrid() {
const grid = document.getElementById("div");
grid.classList.add("grid-item");
}


function mousedown(e) {
  console.log("hello");
  MD = true;
  for (let i = 0; i < gridT.length;i++){
    if (e == gridT[i]){
      console.log(i)
      first = i
    }
  }
  currentSrc = e.children[0].src
  console.log(currentSrc)
}

function mouseenter(e) {
  if(MD) {
  if(e.children[0].src != null && e.children[0].src != ""){
    colour = e.children[0].src
    if(colour == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/bluedot.png"){
      blue_connected = false

    }else if(colour == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/red%20dot.png") {
        red_connected = false


    }else if(colour == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/greendot.png") {
      greeen_connected = false;


    }else if(colour == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/orangedot.png") {
      orange_connected = false;


  }else if(colour == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/yellowdot.png") {
    yellow_connected = false;}

    for(let boxes = 0; boxes < gridT.length; boxes++) {
      if(gridT[boxes].children[0].src == colour) {
        if(gridT[boxes].className != "grid-item origin"){
          gridT[boxes].children[0].src = ""
          console.log("clear")
        }
      }
    }
  }
  console.log(e.children);
  e.children[0].src = currentSrc
  }
}

function reset() {
  MD = false;
  currentSrc = ""
}


console.log(document.getElementById("container").children);




function mouseup(e) {
  console.log("Marvel");
  for (let i = 0; i < gridT.length;i++){
    if (e == gridT[i]){
      console.log(i)
      end = i
    }
  }
  console.log(currentSrc,"hello")
  if (first != end && e.children[0].src == currentSrc){
    if(currentSrc == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/bluedot.png"){
      blue_connected = true
      currentSrc = null
      console.log("connected")

    }else if(currentSrc == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/red%20dot.png") {
        red_connected = true
        currentSrc = null
        console.log("connected")

    }else if(currentSrc == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/greendot.png") {
      greeen_connected = true
      currentSrc = null
      console.log("connected")

    }else if(currentSrc == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/orangedot.png") {
      orange_connected = true
      currentSrc = null
      console.log("connected")

  }else if(currentSrc == "https://sturdy-winner-7v7v9xgvjvqg29gg-3000.app.github.dev/Step_2/yellowdot.png") {
    yellow_connected = true
    currentSrc = null
    console.log("connected")
}

if (blue_connected && red_connected && yellow_connected && orange_connected && greeen_connected){
  console.log("you won")
}


  }

}


function mouseupalt(e) {
  console.log("failed")
  for(let boxes = 0; boxes < gridT.length; boxes++) {
    if(gridT[boxes].children[0].src == currentSrc) {
      if(gridT[boxes].className != "grid-item origin"){
        gridT[boxes].children[0].src = ""
        console.log("clear")
      }
    }
  }
}
