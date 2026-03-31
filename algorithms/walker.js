import { createHelper } from "@javascripthub/canvas-helper";

export default function walker(wrapper) {
  const { setScene, model } = createHelper(wrapper, { x: 150, y: 150 });

  setInterval(() => {
    model.x += Math.random() - 0.5;
    model.y += Math.random() - 0.5;
  });

  setScene((draw) => {
    draw.circle(model.x, model.y, 5);
  });
}
