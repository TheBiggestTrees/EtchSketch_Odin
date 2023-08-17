let div = document.querySelector('#main');

function createGrid() {
let grid = document.createElement('div');
div.appendChild(grid);

grid.className = "grid";

grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
});

return grid;
}



for (i = 256; i >= 1; i--) {
    createGrid();
}



