let numberOfSquares = 6;
let colors = [];
let pickedColor;
let typeSelected = "html";

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message")
let header =  document.querySelector("h1")
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


init();

resetButton.addEventListener("click", function(){
    reset();
})

function init(){
    for (let i = 0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
    
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        })
    }

    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            let clicked = this.style.backgroundColor;
            if (clicked === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeToWinning(clicked);
                header.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "blanchedalmond";
                messageDisplay.textContent = "Try Again";
            }
        })
    }

    reset();
}

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for(let i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Colors";
    header.style.backgroundColor = "blanchedalmond";
}

function changeToWinning(color){
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
}

function generateRandomColors(num){
    let arr = [];
    for(let i = 0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    if (typeSelected === "rgb"){
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return "rgb(" + red + ", " + green + ", " + blue + ")";
    } 
    if (typeSelected === "html"){
        let randomNum =  Math.floor(Math.random() * Object.keys(htmlColors).length);
        return Object.keys(htmlColors)[randomNum];
    }
}