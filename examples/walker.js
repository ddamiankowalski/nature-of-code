import { createHelper } from "@javascripthub/canvas-helper";

export default function walker(wrapper) {
  const walker = new Walker();
  const { setScene, model, destroy } = createHelper(wrapper, walker);

  setScene((draw) => {
    console.log(draw);
    draw.circle(model.x, model.y, 1);
  });

  return destroy;
}

class Walker {
  /**
   * x position of walker
   */
  x = 150;

  /**
   * y position of walker
   */
  y = 150;

  constructor() {
    setInterval(() => this.step());
  }

  step() {
    this.x += Math.random() - 0.5;
    this.y = Math.random() - 0.5;
  }
}
