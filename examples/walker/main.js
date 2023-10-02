import { natureAnimation } from "../../canvas/setup";
import { Walker } from "./walker";

let walker;
const canvas = document.getElementById('walker-canvas');
natureAnimation(500, 500, canvas, setup, draw);

function setup(context, config) {
  walker = new Walker(250, 250, context);
}

function draw(time, context) {
  walker.randMove();
  walker.draw();
}