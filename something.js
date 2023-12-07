(function() {
    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    function shadeColor(color, percent) {
        var f = color.split(","), R = parseInt(f[0].slice(4)), G = parseInt(f[1]), B = parseInt(f[2]);
        var t = percent < 0 ? 0 : 255;
        var P = Math.abs(percent);
        return "rgb(" + (R + (P * (t - R))) + "," + (G + (P * (t - G))) + "," + (B + (P * (t - B))) + ")";
    }

    function makeShadeFactor(i, cycleLength) {
        const minFactor = 0.7; // MAKES THE DARKEST CLOSEST TO ORIGINAL COLOR
        const maxFactor = 0.1; // HIGHER MAKES BRIGHTEST BRIGHTER
        return minFactor + (maxFactor - minFactor) * Math.sin(Math.PI * i / cycleLength);
    }

    function getMiddleColor(grid, cols, gradientCycle) {
        let middleColors = [];
        for (let j = 0; j < cols; j++) {
            let middleIndex = (j + Math.floor(gradientCycle / 2)) % gradientCycle;
            let middleSquare = grid.children[middleIndex];
            middleColors.push(middleSquare.style.backgroundColor);
        }
        return middleColors;
    }

    function getRandomTopColor(topGridSquares) {
        // Get a random color from the top grid squares
        const randomIndex = Math.floor(Math.random() * topGridSquares.length);
        return topGridSquares[randomIndex].style.backgroundColor;
    }

    function populateGrid(gridId, isBottomGrid = false) {
        const grid = document.getElementById(gridId);
        const squareSize = 15; // Size of each square

        const gradientCycle = Math.floor(Math.random() * (150)) + 10; // Length of gradient
        const cols = Math.floor(window.innerWidth / squareSize);
        const rows = isBottomGrid ? 6 : 1; // 6 rows for the bottom grid

        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = `repeat(${cols}, ${squareSize}px)`;

        const baseColor = randomColor();
        const randomStart = Math.floor(Math.random() * gradientCycle);

        let topGridSquares = [];
        if (isBottomGrid) {
            topGridSquares = Array.from(document.getElementById('color-grid').children);
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement('div');
                let cellColor = isBottomGrid ? getRandomTopColor(topGridSquares) : shadeColor(baseColor, makeShadeFactor((j + randomStart) % gradientCycle, gradientCycle));
                cell.style.backgroundColor = cellColor;
                cell.style.width = `${squareSize}px`;
                cell.style.height = `${squareSize}px`;

                grid.appendChild(cell);
            }
        }
    }

    window.onload = () => {
        populateGrid('color-grid');
        populateGrid('bottom-color-grid', true);
    };
})();
