const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
// const colors = [
//     '#c56cf0',
//     '#ffb8b8',
//     '#ff3838',
//     '#ff9f1a',
//     '#ff9f1a',
//     '#fff200',
//     '#32ff7e',
//     '#7efff5',
//     '#18dcff',
//     '#7d5fff',
//     '#4b4b4b',
//     ];

// function handleDraw(e) {
//     ctx.beginPath();
//     const color = colors[Math.floor(Math.random()*colors.length)];
//     console.log(color);
//     ctx.strokeStyle = color;
//     ctx.moveTo(0,0);
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
// }

const brush = document.getElementById("brush");



// canvas.addEventListener("mousemove", handleDraw);

// only draw when mouse is down -> mousedown 
// when mouse is up no drawing -> mouseup
// update everytime there is a click -> new moveTo()


let isPainting = false;


function brushWidth(e) {
    const brushWidth = e.target.value;
    ctx.lineWidth = brushWidth;
}

function handleClick(e) {
    if (isPainting) {
     
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function mouseDown() {
    isPainting = true;
}

function stopPainting() {
    isPainting = false;
}
canvas.addEventListener("mousemove", handleClick);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
brush.addEventListener("change", brushWidth);