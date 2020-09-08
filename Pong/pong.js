const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");


//create the user paddle
const user = {
    x : 0,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "White"
    score : 0
}


//create com paddle
const com = {
    x : canvas.width - 10,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "White"
    score : 0
}


//create the ball
const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    speed : 5,
    velocityX : 5,
    velocityY : 5,
    color : "White"
}

//Draw Rectangle Function
function drawRect(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x,y,w,h);
}

drawRect(0,0,canvas.clientWidth, canvas.clientHeight, "Black");

//Draw Circle
function drawCircle(x,y,r,color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,r,-,Math.PI*2, false);
    context.closePath();
    context.fill();
}

drawCircle(100, 100, 50, "White");

//Draw Text
function drawText(text,x,y,color){
    context.fillStyle = color;
    context.font="45px fantasy";
    context.fillText(text,x,y);
}

drawText("something", 300, 200, "White");
let rectX = 0;

function  render(){
    //clear the canvas
    drawRect(0, 0, canvas.width, canvas.height, "Black");
}