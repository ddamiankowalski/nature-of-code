import { render } from '../canvas/render.js';

export default function draw(canvas) { 
  const walker = new MouseWalker(canvas.width / 2, canvas.height / 2, canvas);

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

class MouseWalker {
  #mouseX = 0;
  #mouseY = 0;

  constructor(x, y, canvas) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.ctx = canvas.getContext('2d');
    this.ctx.beginPath();
    this.ctx.lineWidth = '1';
    this.ctx.strokeStyle = 'black';

    this.#listenMouse();
  }

  walk() {
    const isMouseWalk = Math.random() >= 0.75;
    if (isMouseWalk) {
      const xDist = this.#mouseX -this.x;
      const yDist = this.#mouseY - this.y;
      const vLen = Math.sqrt(Math.pow(yDist, 2) + Math.pow(xDist, 2));

      this.x += xDist / vLen;
      this.y += yDist / vLen;
    } else {
      this.x += this.#getRand();
      this.y += this.#getRand();
    }
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

  #listenMouse() {
    this.canvas.addEventListener('mousemove', event => {
      this.#mouseX = event.offsetX;
      this.#mouseY = event.offsetY;
    })
  }
}