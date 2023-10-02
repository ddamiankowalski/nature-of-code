import { natureAnimation } from "../../canvas/setup";
import { Distribution } from "./distribution";

let distribution;
const canvas = document.getElementById('distribution-canvas');
natureAnimation(500, 500, canvas, setup, draw);

function setup(context, config) {
  distribution = new Distribution(10, context);
}

function draw(time, context) {
  distribution.recalculate();
  distribution.draw();
}