import { render } from '../canvas/render.js';

export default function draw(canvas) { 
  const walker = new Walker(canvas.width / 2, canvas.height / 2, canvas);

  render(() => {
    walker.walk();
    walker.render();
  })();
}

class Walker {
  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.ctx = canvas.getContext('2d');
    this.ctx.beginPath();
    this.ctx.lineWidth = '1';
    this.ctx.strokeStyle = 'black';
  }

  walk() {
    this.x += this.#getRand();
    this.y += this.#getRand();
  }

  render() {
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
  }

  #getRand() {
    return Math.floor(Math.random() * 3) - 1;
  }
}