const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d");

const SIZE = 600;
canvas.height = SIZE;
canvas.width = SIZE;

ctx.strokeStyle = "white"
ctx.lineWidth = 5

ctx.beginPath();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 500)
ctx.stroke()
