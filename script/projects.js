let canvas,ctx;
let centerX ,centerY;


window.onload = () => {
    canvas =document.getElementById("drawingboard");
    ctx = canvas.getContext("2d");

    centerX = canvas.width / 2;
    centerY =canvas.height / 2;
}

 let drawball =() => {
    ctx.lineWidth =10;
    ctx.strokeStyle ="rgb(255,0,0)"
    ctx.fillStyle ="rgb(0,0,255)"

    ctx.beginPath();
    ctx.arc(centerX,centerY,25,0,2 * Math.PI );
    ctx.fill();
    ctx.stroke();

 }
let refreshAnimation = () => {

}
