const container = document.querySelector('.container');
const div = document.createElement('div');
let V = 16;
const gridbutton = document.querySelector('#newgrid');
gridbutton.style.cssText = 'font-size: 20px';

function createGrid (v) {
    for (let i = 0; i < v; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        for (let x = 1; x <= v; x++) {
            var cell = document.createElement('div');
            cell.className = 'gridsquare';
            // cell.innerText = (i * v) + x;
            // cell.style.border = '2px solid black';
            row.style.cssText = 'display: flex';
            // row.className = 'rows';
            row.appendChild(cell);
        }
        div.appendChild(row);
        div.className = 'rows';
        container.appendChild(div);
    }

    let eachCell = document.getElementsByClassName('gridsquare');
    for (let i = 0; i < eachCell.length; i++) {
        eachCell[i].addEventListener("mouseover", () => {
        eachCell[i].style.backgroundColor = "red"; 

        })
    }


}
createGrid(V);

gridbutton.addEventListener('click', () => {
    for (let i = 0; i < V; i++) {
        div.removeChild(div.firstChild);
    }
    let keepGoing = true;
    while (keepGoing == true) {
        V = prompt ('How many cells per row?');
        if (V <= 100) {
            keepGoing = false;
        }
    }

    container.removeChild(div);
    createGrid(V);
    console.log('Grid created');
})










































