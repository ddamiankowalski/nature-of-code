/**
 * Paths of the examples
 */
const PATHS = [
  { name: "Random Walker", module: "./algorithms/walker.js" },
  { name: "Random Mouse Walker", module: "./algorithms/mouse-walker.js" },
  {
    name: "Random Number Distribution",
    module: "./algorithms/rand-distribution.js",
  },
  { name: "Normal Distribution", module: "./algorithms/gauss-distribution.js" },
  { name: "Gauss Walker", module: "./algorithms/gauss-walker.js" },
  { name: "Lévy Flight", module: "./algorithms/levy-walker.js" },
];

/**
 * Builds menu
 * */
const menu = () => {
  const menu = document.getElementById("menu");

  PATHS.forEach((item, index) => {
    const el = document.createElement("div");
    const numEl = document.createElement("span");
    const wrapperEl = document.createElement("div");

    el.classList.add("noc-menu-item");
    wrapperEl.classList.add("noc-menu-item-wrapper");
    numEl.classList.add("noc-menu-item-num");

    el.innerHTML = item.name;
    numEl.innerHTML = index + ".";

    wrapperEl.appendChild(numEl);
    wrapperEl.appendChild(el);
    menu.appendChild(wrapperEl);

    wrapperEl.addEventListener("click", async () => {
      const { default: example } = await import(/* @vite-ignore */ item.module);
      Array.from(menu.children).forEach((node) => node.remove());

      showcase(example);
    });
  });
};

/**
 * Builds showcase
 *
 * @param {*} example
 */
const showcase = (example) => {
  const showcase = document.getElementById("showcase");
  const wrapper = document.getElementById("showcase-wrapper");
  const goBackEl = document.createElement("div");

  const destroy = example(wrapper);

  wrapper.style.height = "300px";
  wrapper.style.width = "300px";

  goBackEl.innerHTML = "Go back";
  goBackEl.classList.add("noc-showcase-back");

  showcase.appendChild(goBackEl);

  goBackEl.addEventListener("click", () => {
    menu();

    goBackEl.remove();
    destroy();

    wrapper.style.height = "0px";
    wrapper.style.width = "0px";
  });
};

menu();
