var canvas=document.getElementById("canvas1")
ctx=canvas.getContext("2d")
color="Blue"
canvas.addEventListener("mousedown",draw)
function draw(e){
    color = document.getElementById("color").nodeValue;
    console.log(color);
mouseX=e.clientX-canvas.offsetLeft;
mouseY=e.clientY-canvas.offsetTop;
console.log("X = " + mouse_x + " ,Y = " + mouse_y);
circle(mouse_x , mouse_y);
}
function circle(mouse_X,mouse_Y){
ctx.beginPath
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2 * Math.PI);
ctx.stroke();;
}
