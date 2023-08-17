let div = document.querySelector('#main');

function createGrid() {
    
    let grid = document.createElement('div');
    div.appendChild(grid);

    grid.className = "grid";

    grid.addEventListener('mouseover', (e) => {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = '#' + randomColor;
    });

    return grid;
}



for (i = 256; i >= 1; i--) {
    createGrid();
}



