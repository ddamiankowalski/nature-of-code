import type p5 from 'p5';

/**
 * A walker that takes one random axis-aligned step per frame.
 *
 * `import type` keeps this a compile-time dependency only, so the p5 runtime is
 * never pulled into the server bundle.
 */
export const randomWalkerSketch = (p: p5): void => {
  let x = 0;
  let y = 0;

  p.setup = () => {
    p.createCanvas(600, 400);
    p.background(24);

    x = p.width / 2;
    y = p.height / 2;
  };

  p.draw = () => {
    p.stroke(235);
    p.strokeWeight(2);
    p.point(x, y);

    switch (p.floor(p.random(4))) {
      case 0:
        x += 1;
        break;
      case 1:
        x -= 1;
        break;
      case 2:
        y += 1;
        break;
      default:
        y -= 1;
        break;
    }

    x = p.constrain(x, 0, p.width);
    y = p.constrain(y, 0, p.height);
  };
};
