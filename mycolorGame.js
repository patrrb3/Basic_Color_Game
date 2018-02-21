var numOfSquares = 6;
var colors;
var goalColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setUpSquares();
  reset();
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset();
    });
  }
}
function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === goalColor) {
      messageDisplay.textContent = "Correct"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      h1.style.textColor = "white";
      resetButton.textContent = "Try again?"
    } else {
      this.style.background = "white";
      messageDisplay.textContent = "Try Again";
      }
    });
  }
}
for(var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
    reset();
  });
}

function reset(){
  messageDisplay.textContent = "";
  colors = generateRandomColors(numOfSquares);
  goalColor = getColor();
  resetButton.textContent = "New Colors";
  colorDisplay.textContent = goalColor;
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "OrangeRed";
}

resetButton.addEventListener("click", function(){
  reset();
});


for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function(){
  var clickedColor = this.style.backgroundColor;
  if (clickedColor === goalColor) {
    messageDisplay.textContent = "Correct"
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor;
    h1.style.textColor = "white";
    resetButton.textContent = "Try again?"
  } else{
    this.style.background = "white";
    messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}


function getColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++){
      arr.push(randomColor());
    }
    return arr;
}


function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${b}, ${g})`;
}
