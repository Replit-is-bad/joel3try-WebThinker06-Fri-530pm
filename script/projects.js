let canvas, ctx;
let centerX, centerY;
let ballX, ballY;
let dX, dY; 

let drawBall = () => {
    ctx.lineWidth = 10;
    ctx.strokeStyle = "rgb(255,0,0)";
    ctx.fillStyle = "rgb(0,0,255)";
    
    ctx.beginPath();
    ctx.arc(ballX, ballY, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

let animating = () => {
    if (document.getElementById("playAnimation").checked) {
        
        ctx.reset();

        
        if (ballX < 0 || ballX > canvas.width) {
            dX = -dX;
        }
        if (ballY < 0 || ballY > canvas.height) {
            dY = -dY
        }

        ballX = ballX + dX;
        ballY = ballY + dY;
        drawBall();
    }
    
    requestAnimationFrame(animating); 
}

window.onload = () => {
    canvas = document.getElementById("drawingboard");
    ctx = canvas.getContext("2d");

    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    ballX = centerX;
    ballY = centerY;

    dX = 5; 
    dY = 5;

    drawBall();
    animating();
}