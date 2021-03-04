let isDrawing = false;
const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = '#eee';

const context = canvas.getContext('2d');
context.lineCap = 'round';
context.lineWidth = 3;

const startDrawing = (e) => {
  const { offsetX: x, offsetY: y } = e;
  console.log({ x, y });
  isDrawing = true;
  context.beginPath();
  context.moveTo(x, y);
};

const finishDrawing = () => {
  isDrawing = false;
};

const draw = (e) => {
  if (!isDrawing) return;
  const { offsetX: x, offsetY: y } = e;
  context.lineTo(x, y);
  context.stroke();
};

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', finishDrawing);
canvas.addEventListener('mousemove', draw);
