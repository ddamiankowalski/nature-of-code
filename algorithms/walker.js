import { createHelper } from "@javascripthub/canvas-helper";

export default function draw(wrapper) {
  const { setScene } = createHelper(canvas, {});

  setScene((draw) => {
    draw.circle(50, 50, 5);
  });
}
