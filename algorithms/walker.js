import { render } from '../canvas/render.js';

export default function draw(canvas) { 
  const walker = new Walker(canvas.width / 2, canvas.height / 2, canvas);

  const { start, stop } = render(() => {
    walker.walk();
    walker.render();
  });

  start();

  return () => {
    walker.clear();
    stop();
  };
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

  clear() {
    this.ctx.clearRect(0, 0, 300, 300);
  }

  #getRand() {
    return Math.floor(Math.random() * 3) - 1;
  }
}