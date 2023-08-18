let div = document.querySelector('#main');

function createGrid(rows, lW) {

    let grid = document.createElement('div');
    rows.appendChild(grid);
    grid.className = "grid";
    grid.setAttribute('style', `width: ${lW}`)

    grid.addEventListener('mouseover', (e) => {
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = '#' + randomColor;
    });

}

function getSides() {
    let sides = +prompt("Type in a number to make the grid. Cannot be over 100");

    if (sides <= 100){
        for (i = sides; i >= 1; i--) {

            let rows = document.createElement('div');
            let lW = 750 / sides + 'px'
            div.appendChild(rows);
            rows.className = "rows";
            rows.setAttribute('style', `height: ${lW};`)

                for (x = 0; x < sides; x++) {
                    createGrid(rows, lW);  
                }
            }   
    }
    
}