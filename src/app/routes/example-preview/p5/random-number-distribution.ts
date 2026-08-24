import type p5 from 'p5';

/**
 * Displays random number distribution
 */
const randomNumberDistribution = (p: p5) => {
  let distribution: RandomDistribution;

  p.setup = () => {
    p.createCanvas(600, 400);
    p.background(255);

    distribution = new RandomDistribution(p);
    distribution.setup();
  };

  p.draw = () => {
    distribution.distribute();
  };
};

class RandomDistribution {
  public readonly total = 20;
  public readonly columns: number[] = [];

  constructor(public readonly p5: p5) {}

  public setup(): void {
    for (let i = 0; i < this.total; i++) {
      this.columns[i] = 0;
    }
  }

  public distribute(): void {
    this.p5.background(255);

    let index = this.p5.floor(this.p5.random(this.columns.length));
    this.columns[index]++;

    this.p5.stroke(0);

    const max = Math.max(...this.columns);
    let width = this.p5.width / this.columns.length;

    for (let x = 0; x < this.columns.length; x++) {
      const column = this.columns[x];

      const height = this.p5.height * (column / max) * 0.7;
      const color = 255 - (column / max) * 255;

      this.p5.fill(255, color, color);
      this.p5.rect(x * width, this.p5.height, width - 1, -height);
    }
  }
}

export default randomNumberDistribution;
