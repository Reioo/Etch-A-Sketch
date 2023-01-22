const container = document.querySelector('.container');
const div = document.createElement('div');
const v = 16;

function createGrid () {

    
    for (let i = 0; i < v; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        for (let x = 1; x <= v; x++) {
            var cell = document.createElement('div');
            cell.className = 'gridsquare';
            cell.innerText = (i * v) + x;
            cell.style.border = '2px solid black';
            cell.style.width = "50px";
            cell.style.height = "50px";
            row.style.cssText = 'display: flex';
            row.appendChild(cell);
        }
        div.appendChild(row);
        container.appendChild(div);
    }
}
createGrid();
