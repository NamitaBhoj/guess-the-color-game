var color = document.querySelector(".title-details");
var squares = document.querySelectorAll(".square");
var newColorButton = document.querySelector(".button-container");
var massege = document.querySelector(".paragraph-container");
var headerTitle = document.querySelector(".title-container");

color.innerHTML = "";
massege.innerHTML = "";

for (let index = 0; index < squares.length; index++) {
  var pickedColor = setBackgroundColor();

  squares[index].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    console.log("clicked colore", clickedColor);
    if (pickedColor === clickedColor) {
      won(clickedColor);
    } else {
      loose(this);
    }
  });
}

function ColorsForSquares() {
  massege.innerHTML = "";

  var squareColorArray = [];

  for (let index = 0; index < squares.length; index++) {
    squareColorArray.push(randomColorGenerator());
  }

  return squareColorArray;
}

function setBackgroundColor() {
  newColorButton.textContent = "New Color";

  var colors = ColorsForSquares();
  pickedColor = colors[Math.floor(Math.random() * 3)];

  color.innerHTML = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  return pickedColor;
}

function won(clickedColor) {
  massege.innerHTML = "correct!";
  newColorButton.textContent = "Play Again?";
  headerTitle.style.backgroundColor = clickedColor;

  changeColors(clickedColor);
}

function changeColors(clickedColor) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = clickedColor;
  }
}

function loose(context) {
  massege.innerHTML = "wrong!";
  context.style.backgroundColor = "#ffffff";
}

newColorButton.addEventListener("click", function () {
  setBackgroundColor();
});

function randomColorGenerator() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
