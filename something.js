function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function createGradient() {
    const color1 = randomColor();
    const color2 = randomColor();
    const color3 = randomColor();
    return `linear-gradient(${color1}, ${color2}, ${color3})`;
}

function populateGrid() {
    const grid = document.getElementById('gradient-grid');
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.background = createGradient();
        grid.appendChild(cell);
    }
}

document.addEventListener('DOMContentLoaded', populateGrid);
