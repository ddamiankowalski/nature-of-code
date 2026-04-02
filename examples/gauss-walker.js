import { render } from '../canvas/render.js';

export default function draw(canvas) { 
  const walker = new GaussWalker((canvas.width / 2) - 5, (canvas.height / 2) - 5, canvas);

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

class GaussWalker {
  constructor(x, y, canvas) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.ctx = canvas.getContext('2d');
    this.ctx.beginPath();
    this.ctx.lineWidth = '1';
    this.ctx.beginPath();
  }

  walk() {
    this.x = (this.canvas.width / 2) - 5 + this.#getRand();
    this.y = (this.canvas.height / 2) - 5 + this.#getRand();
  }

  render() {
    this.ctx.globalAlpha = 0.2;
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, 10, 10);
    this.ctx.stroke();
  }

  clear() {
    this.ctx.clearRect(0, 0, 300, 300);
  }

  #getRand() {
    const marsagliaPolar = () => {
      let u, v, s;
      do {
        u = 2.0 * Math.random() - 1.0;
        v = 2.0 * Math.random() - 1.0;
        s = u * u + v * v;
      } while (s >= 1 || s === 0);
      
      let multiplier = Math.sqrt(-2.0 * Math.log(s) / s);
      return u * multiplier;
    }
    return marsagliaPolar() * 25;
  }
}