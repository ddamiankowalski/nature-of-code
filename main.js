const items = [{ name: 'Random Walker', module: './algorithms/walker.js' }, { name: 'Random Test', module: './algorithms/test.js' }]

function buildMenu(items) {
  const menu = document.getElementById('menu');

  items.forEach((item, index) => {
    const el = document.createElement('div');
    const numEl = document.createElement('span');
    const wrapperEl = document.createElement('div');

    el.classList.add('noc-menu-item');
    wrapperEl.classList.add('noc-menu-item-wrapper');
    numEl.classList.add('noc-menu-item-num');

    el.innerHTML = item.name;
    numEl.innerHTML = index + '.';

    wrapperEl.appendChild(numEl);
    wrapperEl.appendChild(el)
    menu.appendChild(wrapperEl);
    
    wrapperEl.addEventListener('click', async () => {
      const { default: func } = await import(/* @vite-ignore */item.module)
      Array.from(menu.children).forEach(node => node.remove());
      
      const canvas = buildShowcase();
      func(canvas);
    })
  })
}

function buildShowcase() {
  const showcase = document.getElementById('showcase');
  const canvas = document.getElementById('showcase-canvas');
  const goBackEl = document.createElement('div');
  
  goBackEl.innerHTML = 'Go back';
  goBackEl.classList.add('noc-showcase-back')

  goBackEl.addEventListener('click', () => {
    buildMenu(items)
    goBackEl.remove();
    canvas.style.height = '0px';
    canvas.style.width = '0px';
  })

  canvas.style.height = '300px';
  canvas.style.width = '300px';
  showcase.appendChild(goBackEl);

  return canvas;
}

buildMenu(items);