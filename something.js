(function() {
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function populateGrid() {
        const grid = document.getElementById('color-grid');
        const squareSize = 10; // Size of each square (width and height) in pixels

        // Calculate number of columns and rows needed to fill the viewport
        const cols = Math.floor(window.innerWidth / squareSize);
        const rows = 1;

        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = `repeat(${cols}, ${squareSize}px)`;

        
        for (let j = 0; j < cols; j++) {
                const cell = document.createElement('div');
                cell.style.backgroundColor = randomColor();
                cell.style.width = `${squareSize}px`;
                cell.style.height = `${squareSize}px`;
                grid.appendChild(cell);
        }
    }

    window.onload = populateGrid;
})();