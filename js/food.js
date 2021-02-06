export class Food {
  constructor(ctx, scale, canvas) {
    this.ctx = ctx;
    this.scale = scale;
    this.canvas = canvas;
    this.locate();
  }

  locate() {
    this.x =
      (Math.floor((Math.random() * this.canvas.width) / this.scale - 1) + 1) * this.scale;
    this.y =
      (Math.floor((Math.random() * this.canvas.height) / this.scale - 1) + 1) *
      this.scale;
  }

  draw() {
    this.ctx.fillStyle = 'lightgreen';
    this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
  }
}
