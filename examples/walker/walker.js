import { natureAnimation } from "../../canvas/setup";

const canvas = document.getElementById('walker-canvas');

natureAnimation(500, 500, canvas, setup, draw);

function setup() {
  console.log('set ups')
}

function draw(time, context) {
  console.log('draws!', time, context)
}