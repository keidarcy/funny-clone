export class Snake {
  constructor(x, y, ctx, scale, canvas) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.canvas = canvas;
    this.scale = scale;
    this.xSpeed = scale * 1;
    this.ySpeed = scale * 0;
    this.total = 0;
    this.tail = [];
  }

  draw() {
    this.ctx.fillStyle = '#ffffff';
    for (let i = 0; i <= this.tail.length - 1; i++) {
      this.ctx.fillRect(this.tail[i].x, this.tail[i].y, this.scale, this.scale);
    }
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total] = { x: this.x, y: this.y };
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x > this.canvas.width) this.x = 0;
    if (this.y > this.canvas.height) this.y = 0;
    if (this.x < 0) this.x = this.canvas.width;
    if (this.y < 0) this.y = this.canvas.height;
  }

  changeDirection(direction) {
    switch (direction) {
      case 'up':
        this.xSpeed = 0;
        this.ySpeed = -this.scale * 1;
        break;
      case 'down':
        this.xSpeed = 0;
        this.ySpeed = this.scale * 1;
        break;
      case 'left':
        this.xSpeed = -this.scale * 1;
        this.ySpeed = 0;
        break;
      case 'right':
        this.xSpeed = this.scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  eat(food) {
    return;
  }
}
