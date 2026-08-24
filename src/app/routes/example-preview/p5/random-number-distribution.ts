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
  public readonly randomCounts: number[] = [];

  constructor(public readonly p5: p5) {}

  public setup(): void {
    for (let i = 0; i < this.total; i++) {
      this.randomCounts[i] = 0;
    }
  }

  public distribute(): void {
    this.p5.background(255);

    let index = this.p5.floor(this.p5.random(this.randomCounts.length));
    this.randomCounts[index]++;

    this.p5.stroke(0);

    let width = this.p5.width / this.randomCounts.length;

    for (let x = 0; x < this.randomCounts.length; x++) {
      this.p5.rect(
        x + width,
        this.p5.height - this.randomCounts[x],
        width - 1,
        this.randomCounts[x],
      );
    }
  }
}

export default randomNumberDistribution;
