export class Distribution {
  constructor(columnLength, context) {
    this.columns = new Array(columnLength).fill(0);
    this.context = context;
  }

  draw() {
    this.context.fillStyle = 'black';

    for (let i = 0; i < this.columns.length; i++) {
      const colWidth = this.context.canvas.width / this.columns.length;
      const xPos = colWidth * i;
      this.context.fillRect(xPos + 5, this.context.canvas.height, colWidth - 10, this.calculateHeight(i))
    }
  }

  recalculate() {
    const randIndex = Math.floor(Math.random() * this.columns.length);
    this.columns[randIndex]++;
  }

  calculateHeight(index) {
    const allSum = this.columns.reduce((acc, curr) => acc + curr, 0);
    const ratio = this.columns[index] / allSum;
    return -ratio * this.context.canvas.height;
  }
}