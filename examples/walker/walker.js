export class Walker {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.context = context;
  }

  draw() {
    this.context.save();
    this.context.fillStyle = 'black';
    this.context.fillRect(this.x, this.y, 1, 1);
    this.context.restore();
  }

  randMove() {
    this.x += Math.floor(Math.random() * 3) - 1
    this.y += Math.floor(Math.random() * 3) - 1;
  }
}