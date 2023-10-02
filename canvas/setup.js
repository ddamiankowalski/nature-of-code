/**
 * Function that allows you to initialize canvas with a certain width/height
 * @param {*} width 
 * @param {*} height 
 * @param {*} element 
 */
export const natureAnimation = function (width, height, canvasElement, initCallback, drawCallback) {
  const context = canvasElement.getContext('2d');
  canvasElement.width = width;
  canvasElement.height = height;

  canvasElement.style.width = width + 'px';
  canvasElement.style.height = height + 'px';

  canvasElement.style.position = 'absolute';
  canvasElement.style.top = '50%';
  canvasElement.style.left = '50%';
  canvasElement.style.transform = 'translate(-50%, -50%)'

  const config = {
    refresh: false
  }

  initCallback(context, config);

  const drawWrapper = (time) => {
    config.refresh && context.clearRect(0, 0, width, height);
    drawCallback(time, context);
    requestAnimationFrame(drawWrapper);
  }
  
  requestAnimationFrame(drawWrapper);

  return context;
}