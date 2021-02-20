import { Food } from './food.js';
import { Snake } from './snake.js';
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const scale = 10;

(() => {
  const snake = new Snake(0, 0, ctx, scale, canvas);
  const food = new Food(ctx, scale, canvas);

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    food.draw();
    snake.update();
    snake.draw();
    if (snake.x === food.x && snake.y === food.y) {
      snake.total++;
      food.locate();
    }
  }, 100);

  window.addEventListener('keydown', (e) => {
    const direction = e.key.replace('Arrow', '').toLowerCase();
    snake.changeDirection(direction);
  });
})();
