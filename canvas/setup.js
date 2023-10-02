/**
 * Function that allows you to initialize canvas with a certain width/height
 * @param {*} width 
 * @param {*} height 
 * @param {*} element 
 */
export const natureAnimation = function (width, height, canvasElement, initCallback, drawCallback) {
  const context = canvasElement.getContext('2d');
  context.width = width;
  context.height = height;
  
  canvasElement.style.width = width + 'px';
  canvasElement.style.height = height + 'px';

  canvasElement.style.position = 'absolute';
  canvasElement.style.top = '50%';
  canvasElement.style.left = '50%';
  canvasElement.style.transform = 'translate(-50%, -50%)'

  initCallback();

  const drawWrapper = (time) => {
    drawCallback(time, context);
    requestAnimationFrame(drawWrapper);
  }
  
  requestAnimationFrame(drawWrapper);

  return context;
}