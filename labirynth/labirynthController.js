export function Controller(hate, width, maze, walls, currentPosition) {
    hate = hate % 2 == 0 ? hate + 1 : hate;
    width = width % 2 == 0 ? width + 1 : width;
    document.getElementById('maze').setAttribute('style', 'height:' + hate * 20 + 'px; width:' + width * 20 + 'px');
  for (var y = 0; y < hate; y++) {
      maze[y] = [];
      for (var x = 0; x < width; maze[y][x++] = 'wall') {
        var el = document.getElementById('maze').appendChild(document.createElement("div"));
        el.className = 'block wall';
        el.setAttribute('id', y + '-' + x);
      }
    }
}
