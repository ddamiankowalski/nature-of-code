import { createHelper } from "@javascripthub/canvas-helper";

export default function walker(wrapper) {
  const model = {};
  const { destroy, setScene } = createHelper(wrapper, model);

  setScene((draw) => {
    draw.circle(5, 5, 10);
  });

  return {
    draw,
  };
}
