(function() {
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function populateGrid() {
        const grid = document.getElementById('color-grid');
        const rows = 3; // Adjust the number of rows as needed
        const cols = 3; // Adjust the number of columns as needed

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement('div');
                cell.style.backgroundColor = randomColor();
                cell.style.width = '100px'; // Adjust cell size as needed
                cell.style.height = '100px';
                cell.style.display = 'inline-block';
                grid.appendChild(cell);
            }
        }
    }

    window.onload = populateGrid;
})();

