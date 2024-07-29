/**
 * A helper function that allows you to register a renderFn and start rendering
 * 
 * @param {*} renderFn 
 * @returns 
 */
export const render = (renderFn) => {
  let isStopped = false;

  const start = () => {
    if (isStopped) {
      return;
    }

    renderFn();
    requestAnimationFrame(start);
  }

  const stop = () => (isStopped = true);

  return { start, stop };
}