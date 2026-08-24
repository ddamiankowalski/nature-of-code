import type p5 from 'p5';

/**
 * A walker that takes one random axis-aligned step per frame.
 *
 * `import type` keeps this a compile-time dependency only, so the p5 runtime is
 * never pulled into the server bundle.
 */
const randomWalker = (p: p5): void => {
  const walker = new Walker(p);

  p.setup = () => {
    p.createCanvas(600, 400);
    p.background(255);

    p.draw = () => {
      walker.step();
      walker.show();
    };
  };
};

class Walker {
  public x = 0;
  public y = 0;

  constructor(public readonly p: p5) {
    this.x = p.width / 2;
    this.y = p.height / 2;
  }

  public show(): void {
    const { stroke, point } = this.p;

    stroke(0);
    point(this.x, this.y);
  }

  public step(): void {
    const { floor, random } = this.p;

    const choice = floor(random(4));

    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
  }
}

export default randomWalker;
