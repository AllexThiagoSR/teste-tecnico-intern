const table = document.getElementById('game');
const button = document.getElementById('init');

const createGridWithSomeCellsAlive = (length) => {
  const grid = [];
  for (let x = 0; x < length; x += 1) {
    grid.push([]);
    const tr = document.createElement('tr');
    for(let y = 0; y < length; y += 1) {
      const td = document.createElement('td');
      td.id = `${x}-${y}`
      grid[x].push({ x, y, alive: false, element: td });
      const randomNumber = Math.floor(Math.random() * 100);
      if (randomNumber > 50) {
        grid[x][y].alive = true;
        grid[x][y].element.className = 'alive'
      }
      tr.appendChild(grid[x][y].element);
    }
    table.appendChild(tr);
  }
  return grid;
};

const grid = createGridWithSomeCellsAlive(25);

window.onload = () => {}