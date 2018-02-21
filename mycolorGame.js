var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var goalColor = getColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = goalColor;
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

easyButton.addEventListener("click", function(){
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  colors = generateRandomColors(3);
  goalColor = getColor();
  colorDisplay.textContent = goalColor;
  for (var i = 0; i < squares.length; i++) {
      if(colors[i]){
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
      }
  }

});

hardButton.addEventListener("click", function(){
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  colors = generateRandomColors(6);
  goalColor = getColor();
  colorDisplay.textContent = goalColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(6);
    goalColor = getColor();
    colorDisplay.textContent = goalColor;
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "white";
});


for (var i = 0; i < squares.length; i++) {
  // add random colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add event lisnter to square
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
