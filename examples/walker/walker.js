export class Walker {
  constructor(x, y, context) {
    this.x = x;
    this.y = y;
    this.context = context;
  }

  draw() {
    this.context.save();
    this.context.strokeStyle = 'black';
    this.context.lineTo(this.x, this.y, 1, 1);
    this.context.stroke();
    this.context.restore();
  }

  randMove() {
    this.x += (Math.random() - .5) * 15;
    this.y += (Math.random() - .5) * 15;
  }
}