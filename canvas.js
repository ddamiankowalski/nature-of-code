import { createHelper } from "@javascripthub/canvas-helper";

/**
 * Creates a canvas by using canvas helper
 *
 * @returns
 */
export const createCanvas = () => {
  const wrapper = document.getElementById("showcase-wrapper");

  if (!wrapper) {
    throw new Error("Could not find wrapper while creating canvas");
  }
  const helper = createHelper();

  return {
    helper,
    destroy,
  };
};
