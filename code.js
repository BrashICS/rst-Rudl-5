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


//declaring the grid
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



const gridContaner = document.querySelector(".grid");

//Don't know it's purpose as te grid function is already declared, too scred to remove it and too lazy to see if any changes occur.
function createGrid() {
const grid = document.getElementById("div");
grid.classList.add("grid-item");
}

//This function is needed for the dragging feature and is gets the information of the box that was clicked on
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

// When the mouse enters a box, this function checks if this box already has a colour and deletes the trail of colour and colours the box
function mouseenter(e) {
  if(MD) {
  if(e.children[0].src != null && e.children[0].src != ""){
    console.log("im here")
    colour = e.children[0].src
    if(colour == "https://brashics.github.io/rst-Rudl-5/bluedot.png"){
      blue_connected = false;
      console.log("failed to")


    }else if(colour == "https://brashics.github.io/rst-Rudl-5/red%20dot.png") {
        red_connected = false;
        console.log("failed to")


    }else if(colour == "https://brashics.github.io/rst-Rudl-5/greendot.png") {
      greeen_connected = false;
      console.log("failed to")



    }else if(colour == "https://brashics.github.io/rst-Rudl-5/orangedot.png") {
      orange_connected = false;
      console.log("failed to")



  }else if(colour == "https://brashics.github.io/rst-Rudl-5/yellowdot.png ") {
    yellow_connected = false;}
    console.log("failed to")


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



//This function is only activated when the user releases on the origin boxes; also checks if game is won.
function mouseup(e) {
  console.log(e.children[0].src, "Marvel");
  for (let i = 0; i < gridT.length;i++){
    if (e == gridT[i]){
      console.log(i)
      end = i
    }
  }
  console.log(currentSrc,"hello")
  if (first != end && e.children[0].src == currentSrc){
    if(currentSrc == "https://brashics.github.io/rst-Rudl-5/bluedot.png"){
      blue_connected = true;
      currentSrc = null
      console.log("connected")

    }else if(currentSrc == "https://brashics.github.io/rst-Rudl-5/red%20dot.png") {
        red_connected = true;
        currentSrc = null
        console.log("connected")

    }else if(currentSrc == "https://brashics.github.io/rst-Rudl-5/greendot.png") {
      greeen_connected = true;
      currentSrc = null
      console.log("connected")

    }else if(currentSrc == "https://brashics.github.io/rst-Rudl-5/orangedot.png") {
      orange_connected = true;
      currentSrc = null
      console.log("connected")

  }else if(currentSrc == "https://brashics.github.io/rst-Rudl-5/yellowdot.png") {
    yellow_connected = true;
    currentSrc = null
    console.log("connected")
}

if (blue_connected && red_connected && yellow_connected && orange_connected && greeen_connected){
  console.log("you won");
}


  }

}

//This checks if the user failed to connect; will erase the trail of colours.
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
