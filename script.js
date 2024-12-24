var canvas = document.getElementById("drawingCanvas");
var ctx = canvas.getContext("2d");
if (ctx) {
    // Draw a rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 200, 100);
    // Draw a circle
    ctx.beginPath();
    ctx.arc(400, 200, 50, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    // Draw a line
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(500, 350);
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
    // Add some text
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Simple Shapes!", 350, 50);
}
else {
    console.error("Canvas context is not available.");
}
