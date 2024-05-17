const game = document.getElementById('game');
const canva =  game.getContext('2d');
game.height = 720;
game.width = 1280;
const width = game.width;
const height = game.height;
const pixelSize = 10;
const deathFromSuperpopulation = 3;
const deathFromLonelyness = 2;
let grid = [];

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

const countAliveNeighbours = (x, y) => {
  let counter = 0;
  const neighbours = [
    { x: x -1, y },
    { x: x + 1, y },
    { x, y: y - 1 },
    { x, y: y + 1 },
    { x: x -1, y: y - 1 },
    { x: x - 1, y: y + 1 },
    { x: x + 1, y: y - 1 },
    { x: x + 1, y: y + 1 },
  ];
  for (const coordinate of neighbours) {
    if (cellExists(coordinate.x, coordinate.y)) counter += 1;
  }
  return counter;
}

const updatePixel = (x, y) => {
  const neighboursQuantity = countAliveNeighbours(x, y);
  if (grid[x][y] && (neighboursQuantity > deathFromSuperpopulation || neighboursQuantity < deathFromLonelyness)) return false;
  if (!grid[x][y] && neighboursQuantity === 3) return true;
  return grid[x][y];
}

const updateCanva = () => {
  canva.clearRect(0, 0, width, height);
  const tmpGrid = grid.map(a => [...a]);
  for (let x = 0; x < tmpGrid.length; x += 1) {
    for (let y = 0; y < tmpGrid[x].length; y += 1) {
      tmpGrid[x][y] = updatePixel(x, y);
    }
  }
  grid = tmpGrid;
  let counter = 0;
  for (let x = 0; x < grid.length; x += 1) {
    for (let y = 0; y < grid[x].length; y += 1) {
      if (grid[x][y]) {
        fillPixel(x*pixelSize, y*pixelSize, "black", pixelSize);
        counter += 1;
      }
    }
  }
  
  setTimeout(() => { requestAnimationFrame(updateCanva); }, 40);
}

const initGridWithSomeAliveCells = (width, height) => {
  const arr = [];
  for (let x = 0; x < width; x += 1) {
    arr.push([]);
    for (let y = 0; y < height; y += 1) {
      arr[x].push(Math.random() > 0.5)
    }
  }
  return arr;
}

const init = () => {
  grid = initGridWithSomeAliveCells(width / pixelSize, height / pixelSize);
  updateCanva();
}

init();
