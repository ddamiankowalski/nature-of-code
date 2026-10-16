import type p5 from 'p5';

const CANVAS_CONTAINER_ID = 'canvas-container';

/**
 * Fits the canvas to its parent now and on every window resize.
 * Call it in `setup` right after `createCanvas`.
 */
export const resize = (p: p5, onResize?: () => void): void => {
  const parent = document.getElementById(CANVAS_CONTAINER_ID);

  if (parent) {
    p.resizeCanvas(parent.clientWidth, parent.clientHeight);
  }

  p.windowResized = () => {
    if (!parent) {
      return;
    }

    p.resizeCanvas(parent.clientWidth, parent.clientHeight);
    onResize && onResize();
  };
};
