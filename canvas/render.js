/**
 * A helper function that allows you to register a renderFn and start rendering
 * 
 * @param {*} renderFn 
 * @returns 
 */
export const render = (renderFn) => {
  const startRender = () => {
    renderFn();
    requestAnimationFrame(startRender);
  }

  return startRender;
}