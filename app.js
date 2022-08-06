const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colors = [
    '#c56cf0',
    '#ffb8b8',
    '#ff3838',
    '#ff9f1a',
    '#ff9f1a',
    '#fff200',
    '#32ff7e',
    '#7efff5',
    '#18dcff',
    '#7d5fff',
    '#4b4b4b',
    ];

function handleDraw(e) {
    ctx.beginPath();
    const color = colors[Math.floor(Math.random()*colors.length)];
    console.log(color);
    ctx.strokeStyle = color;
    ctx.moveTo(0,0);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}



canvas.addEventListener("mousemove", handleDraw);

