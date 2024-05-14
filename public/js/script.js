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

const init = () => {}

init();
