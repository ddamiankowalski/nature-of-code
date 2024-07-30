import { render } from '../canvas/render.js';

export default function draw(canvas) { 
  const walker = new LevyWalker(canvas.width / 2, canvas.height / 2, canvas);

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

class LevyWalker {
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
    this.ctx.globalAlpha = 1;
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
  }

  clear() {
    this.ctx.clearRect(0, 0, 300, 300);
  }

  #getRand() {
    const randomValue = Math.random();
    const isLevy = randomValue < 0.01;
    return (Math.random() * 2 - 1) * (isLevy ? 20 : 1);
  }
}