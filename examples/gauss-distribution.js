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
  constructor(canvas) {
    this.size = 100;
    this.normalArray = new Array(100).fill(0);

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
    if (this.currentValue < 4 && this.currentValue > -4) {
      const index = Math.floor((this.currentValue + 4) / 8 * 99);
      this.normalArray[index]++;
    }
  }

  render() {
    this.ctx.clearRect(0, 0, 300, 280);
    this.ctx.fillStyle = 'black';
    this.ctx.globalAlpha = 1;
    const colWidth = 300 / this.size;
    
    this.normalArray.forEach((num, index) => {
      const value = num / Math.max(...this.normalArray) * 200;
      this.ctx.fillRect(index * colWidth, 280, colWidth - 1, -value);
    })

    this.ctx.fillStyle = 'red';
    this.ctx.globalAlpha = 0.1;
    const result = (this.currentValue + 4) * 300 / 8;
    this.ctx.fillRect(result, 280, 2, 20);
  }

  clear() {
    this.ctx.clearRect(0, 0, 300, 300);
  }
}