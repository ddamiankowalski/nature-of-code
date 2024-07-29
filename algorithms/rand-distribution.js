import { render } from '../canvas/render.js';

export default function draw(canvas) { 
  const distribution = new RandDistribution(20, canvas);

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

class RandDistribution {
  constructor(size, canvas) {
    this.size = size;
    this.randomArr = new Array(size).fill(0);

    this.ctx = canvas.getContext('2d');
    this.ctx.beginPath();
    this.ctx.lineWidth = '1';
    this.ctx.strokeStyle = 'black';
  }

  add() {
    this.randomArr[Math.floor(Math.random() * this.size)]++;
  }

  render() {
    this.ctx.clearRect(0, 0, 300, 300);
    this.ctx.fillStyle = 'grey';
    const colWidth = 300 / this.size;
    
    this.randomArr.forEach((num, index) => {
      const value = num / Math.max(...this.randomArr) * 150;
      this.ctx.fillRect(index * colWidth, 300, colWidth - 1, -value);
    })
  }

  clear() {
    this.ctx.clearRect(0, 0, 300, 300);
  }
}