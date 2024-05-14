const game = document.getElementById('game');
const canva =  game.getContext('2d');
game.height = 720;
game.width = 1280;
const width = game.width;
const height = game.height;
const pixelSize = 10;
const deathFromSuperpopulation = 4;
const deathFromLonelyness = 3;
let grid = [];
let tmpGrid = [];

const fillPixel = (x, y, color, size) => {
  canva.fillStyle = color;
  canva.fillRect(x, y, size, size)
}

const cellExists = (x, y) => {
  try {
    return grid[x][y];
  } catch (error) {
    return false;
  }
}

const initGrid = (width, height) => {
  const arr = [];
  for (let x = 0; x < width; x += 1) {
    arr.push([]);
    for (let y = 0; y < height; y += 1) {
      arr[x].push(false)
    }
  }
  return arr;
}

const init = () => {
  grid = initGrid(width / pixelSize, height / pixelSize);
  tmpGrid = initGrid(width / pixelSize, height / pixelSize);
  for (let x = 0; x < width / pixelSize; x += 1) {
    for (let y = 0; y < height / pixelSize; y += 1) {
      if (Math.random() > 0.5) grid[x][y] = true;
    }
  }
}

init();
