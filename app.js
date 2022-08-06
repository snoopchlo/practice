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
const color = document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
console.dir(colorOptions);
const fillBtn = document.getElementById("fill-btn");
const resetBtn = document.getElementById("reset-btn");
const eraserBtn = document.getElementById("eraser-btn");
// canvas.addEventListener("mousemove", handleDraw);

// only draw when mouse is down -> mousedown
// when mouse is up no drawing -> mouseup
// update everytime there is a click -> new moveTo()

let isPainting = false;
let isFilling = false;

function handleColor(e) {
  const chosenColor = e.target.value;
  ctx.fillStyle = chosenColor;
  ctx.strokeStyle = chosenColor;
}

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

function onColorClick(e) {
  const colorOption = e.target.dataset.color;
  ctx.fillStyle = colorOption;
  ctx.strokeStyle = colorOption;
  color.value = colorOption;
}

function changeMode() {
  if (isFilling) {
    fillBtn.innerText = "Fill";
    isFilling = false;
  } else {
    fillBtn.innerText = "Draw";
    isFilling = true;
  }
  console.log("is Filling is: ", isFilling);
  console.log("is Painting is: ", isPainting);
  console.log("fillBtn inner text: ", fillBtn.innerText);
}

function onFillMode() {
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}

function onReset() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 800);
}
function onErase() {
  ctx.strokeStyle = "white";
  ctx.stroke();
  isFilling = false;
}
canvas.addEventListener("mousemove", handleClick);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);

brush.addEventListener("change", brushWidth);
color.addEventListener("change", handleColor);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
fillBtn.addEventListener("click", changeMode);
canvas.addEventListener("click", onFillMode);
resetBtn.addEventListener("click", onReset);
eraserBtn.addEventListener("click", onErase);
