(function() {
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function createGradient() {
        const color1 = randomColor();
        const color2 = randomColor();
        const color3 = randomColor();
        return `linear-gradient(${color1}, ${color2}, ${color3})`;
    }

    function populateGrid(rows, columns) {
        const grid = document.getElementById('gradient-grid');
        grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

        for (let i = 0; i < rows * columns; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.style.background = createGradient();
            grid.appendChild(cell);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        populateGrid(9, 3); // Set the number of rows and columns here
    });
})();
