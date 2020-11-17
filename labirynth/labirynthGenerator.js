export function amaze(y, x, addBlockWalls) {
    maze[y][x] = 'maze';
    document.getElementById(y + '-' + x).className = 'block';
    if (addBlockWalls && valid(y + 1, x) && (maze[y + 1][x] == 'wall')) walls.push([y + 1, x, [y, x]]);
    if (addBlockWalls && valid(y - 1, x) && (maze[y - 1][x] == 'wall')) walls.push([y - 1, x, [y, x]]);
    if (addBlockWalls && valid(y, x + 1) && (maze[y][x + 1] == 'wall')) walls.push([y, x + 1, [y, x]]);
    if (addBlockWalls && valid(y, x - 1) && (maze[y][x - 1] == 'wall')) walls.push([y, x - 1, [y, x]]);
  }