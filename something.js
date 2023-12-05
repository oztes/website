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
        // Adjust the range of the sine wave to prevent full white color
        const minFactor = 0.1;  // Adjust this value to control the minimum lightness
        const maxFactor = 0.6;  // Adjust this value to control the maximum lightness
        return minFactor + (maxFactor - minFactor) * Math.sin(Math.PI * i / cycleLength);
    }

    function populateGrid() {
        const grid = document.getElementById('color-grid');
        const squareSize = 30; // Size of each square (width and height) in pixels

        // Set gradient cycle to a random number between 10 and 18
        const gradientCycle = Math.floor(Math.random() * (18 - 10 + 1)) + 10;

        // Calculate number of columns needed to fill the viewport
        const cols = Math.floor(window.innerWidth / squareSize);

        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = `repeat(${cols}, ${squareSize}px)`;

        const baseColor = randomColor();
        const randomStart = Math.floor(Math.random() * gradientCycle);

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            // Calculate position in the gradient cycle, starting from the random point
            let cyclePos = (j + randomStart) % gradientCycle;
            // Calculate shade factor
            let shadeFactor = makeShadeFactor(cyclePos, gradientCycle);
            cell.style.backgroundColor = shadeColor(baseColor, shadeFactor);
            cell.style.width = `${squareSize}px`;
            cell.style.height = `${squareSize}px`;
            grid.appendChild(cell);
        }
    }

    window.onload = populateGrid;
})();
