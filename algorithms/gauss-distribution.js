import { render } from '../canvas/render.js';

export default function draw(canvas) { 
  const distribution = new GaussDistribution(canvas);

  const { start, stop } = render(() => {
    distribution.add();
    distribution.render();
  });

  start();

  return () => {
    distribution.clear();
    stop();
  };
}

class GaussDistribution {
  currentValue = null;
  layer = 0;
  layerRefCount = 0;

  constructor(canvas) {
    this.size = 30;

    this.ctx = canvas.getContext('2d');
    this.ctx.beginPath();
    this.ctx.lineWidth = '1';
    this.ctx.strokeStyle = 'black';
  }

  add() {
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

    this.currentValue = marsagliaPolar();
    this.layerRefCount++;

    if (this.layerRefCount > 10) {
      this.layerRefCount = 0;
      this.layer++;

    }
  }

  render() {
    this.ctx.fillStyle = 'red';
    const result = (this.currentValue + 4) * 300 / 8;
    this.ctx.fillRect(result, 300 - this.layer, 2, 2);
  }

  clear() {
    this.ctx.clearRect(0, 0, 300, 300);
  }
}