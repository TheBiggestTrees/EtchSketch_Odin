let div = document.querySelector('#main');

function createGrid() {
    let grid = document.createElement('div');
    
    div.appendChild(grid);

    grid.className = "grid";
    
    grid.addEventListener('mouseover', (e) => {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = '#' + randomColor;
    });

}

function getSides() {

    let sides = prompt("Type in a number to make the grid. Cannot be over 100");

    

    if (sides < 100){
        for (i = sides**2; i >= 1; i--) {
                createGrid();  
            }
    
    }
    
}