let canvas, ctx;
let centerX, centerY;
let ballX, ballY;
let dx, dy;



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
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawBall();

	
		if (ballX < 0 || ballx> canvas.width) {
			dx = -dx;
		}
		
		if (ballY < 0 || ballY >canvas.height) {
			dy = -dy;
		}


		x += dx;
		y += dy;
        drawBall();

    requestAnimationFrame(animating);
	}
    window.onload = () => {

        canvas = document.getElementById('canvasBoard');
        ctx = canvas.getContext('2d');
    
    
        centerX =canvas.width /2;
        centerY =center.height /2;
    
        ballx = centerX
        bally =centerY
        dx = 2;
        dy = -2;
    
        drawBall();
        animating();
    }
	
}
