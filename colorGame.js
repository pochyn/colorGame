let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square")
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message")
let header =  document.querySelector("h1")
let reset = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i<squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})

reset.addEventListener("click", function(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    reset.textContent = "New Colors";
    header.style.backgroundColor = "blanchedalmond";
})

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        let clicked = this.style.backgroundColor;
        if (clicked === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeToWinning(clicked);
            header.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "blanchedalmond";
            messageDisplay.textContent = "Try Again";
        }
    })
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
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}