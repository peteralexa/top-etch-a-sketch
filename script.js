const grid = document.querySelector("#grid");

const gridSizeBtn16 = document.querySelector(".btn-16x16");
gridSizeBtn16.addEventListener("click", add16x16GridElements);

let elementsAdded = false;

function add16x16GridElements() {
    if (!elementsAdded) {
        for (let i = 0; i < 16; i++) {
            const row = document.createElement("div");
            row.className = "grid-row";

            for (let j = 0; j < 16; j++) {
                const gridElement = document.createElement("div");
                gridElement.className = "grid-element";
                row.appendChild(gridElement);
            }

            grid.appendChild(row);
        }

        elementsAdded = true;
    }
}