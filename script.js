const grid = document.querySelector("#grid");

const gridSizeBtn16 = document.querySelector(".btn-16x16");
gridSizeBtn16.addEventListener("click", add16x16GridElements);

const gridSizeBtn32 = document.querySelector(".btn-32x32");
gridSizeBtn32.addEventListener("click", add32x32GridElements);

const gridSizeBtn48 = document.querySelector(".btn-48x48");
gridSizeBtn48.addEventListener("click", add48x48GridElements);

const gridSizeBtn64 = document.querySelector(".btn-64x64");
gridSizeBtn64.addEventListener("click", add64x64GridElements);

const gridSizeBtn80 = document.querySelector(".btn-80x80");
gridSizeBtn80.addEventListener("click", add80x80GridElements);

const gridSizeBtn96 = document.querySelector(".btn-96x96");
gridSizeBtn96.addEventListener("click", add96x96GridElements);

const resetBtn = document.querySelector("#reset-btn");

const colorPicker = document.querySelector("#color-picker");

const presetColorBtns = document.querySelectorAll("#color-btn-preset");

const intro = document.createElement("div");
intro.className = "intro";

const introHeader = document.createElement("h1");
introHeader.className = ("intro-header")
introHeader.textContent = "Welcome to my etch-a-sketch!";

const introPara1 = document.createElement("p");
introPara1.className = ("intro-para1")
introPara1.textContent = "<== Select your desired grid size to the left, press the RESET button to clear the grid";

const introPara2 = document.createElement("p");
introPara2.className = ("intro-para2")
introPara2.textContent = "Select your desired color to the right, you can choose from multiple presets or use the RGB wheel ==>";

grid.appendChild(intro);
intro.appendChild(introHeader);
intro.appendChild(introPara1);
intro.appendChild(introPara2);

let selectedColor = "black";

let useRandomColor = false;

colorPicker.addEventListener("input", function() {
    useRandomColor = false;
    if (useRandomColor === false) {
        selectedColor = colorPicker.value};
});

presetColorBtns.forEach(function(presetBtn) {
    presetBtn.addEventListener("click", function() {
        useRandomColor = false;
        if (useRandomColor === false) {
            selectedColor = this.getAttribute("data-color")};
    });
});

grid.addEventListener("dragstart", function (event) {
    event.preventDefault();
});

const randomColorBtn = document.querySelector("#color-btn-random")
randomColorBtn.addEventListener("click", function() {
    useRandomColor = true;
    if (useRandomColor === true) {
        selectedColor = randomRgbColor()};
});

function randomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let RgbColor = "rgb(" + r + "," + g + "," + b + ")";  
    return RgbColor;
  };

function add16x16GridElements() {
    grid.innerHTML = "";

    for (let i = 0; i < 16; i++) {
        const row16 = document.createElement("div");
        row16.className = "grid-row16";

        for (let j = 0; j < 16; j++) {
            const gridElement16 = document.createElement("div");
            gridElement16.className = "grid-element16";
            row16.appendChild(gridElement16);

            gridElement16.addEventListener("mouseover", function(event) {
                if (event.buttons === 1) {
                    if (useRandomColor === true) {
                        this.style.backgroundColor = randomRgbColor();
                    } else {
                        this.style.backgroundColor = selectedColor;
                    }
                }
            });
            gridElement16.addEventListener("click", function() {
                this.style.backgroundColor = selectedColor;
            });
        }

        grid.appendChild(row16);
    }

    const gridElements16 = document.querySelectorAll(".grid-element16");

    resetBtn.addEventListener("click", function() {
        gridElements16.forEach(function(gridElement16) {
            gridElement16.style.backgroundColor = "white";
        });
    });
}

function add32x32GridElements() {
    grid.innerHTML = "";

    for (let i = 0; i < 32; i++) {
        const row32 = document.createElement("div");
        row32.className = "grid-row32";

        for (let j = 0; j < 32; j++) {
            const gridElement32 = document.createElement("div");
            gridElement32.className = "grid-element32";
            row32.appendChild(gridElement32);

            gridElement32.addEventListener("mouseover", function(event) {
                if (event.buttons === 1) {
                    if (useRandomColor === true) {
                        this.style.backgroundColor = randomRgbColor();
                    } else {
                        this.style.backgroundColor = selectedColor;
                    }
                }
            });

            gridElement32.addEventListener("click", function() {
                this.style.backgroundColor = selectedColor;
            });
        }

        grid.appendChild(row32);
    }

    const gridElements32 = document.querySelectorAll(".grid-element32");

    resetBtn.addEventListener("click", function() {
        gridElements32.forEach(function(gridElement32) {
            gridElement32.style.backgroundColor = "white";
        });
    });
}

function add48x48GridElements() {
    grid.innerHTML = "";

    for (let i = 0; i < 48; i++) {
        const row48 = document.createElement("div");
        row48.className = "grid-row48";

        for (let j = 0; j < 48; j++) {
            const gridElement48 = document.createElement("div");
            gridElement48.className = "grid-element48";
            row48.appendChild(gridElement48);

            gridElement48.addEventListener("mouseover", function(event) {
                if (event.buttons === 1) {
                    if (useRandomColor === true) {
                        this.style.backgroundColor = randomRgbColor();
                    } else {
                        this.style.backgroundColor = selectedColor;
                    }
                }
            });

            gridElement48.addEventListener("click", function() {
                this.style.backgroundColor = selectedColor;
            });
        }

        grid.appendChild(row48);
    }

    const gridElements48 = document.querySelectorAll(".grid-element48");

    resetBtn.addEventListener("click", function() {
        gridElements48.forEach(function(gridElement48) {
            gridElement48.style.backgroundColor = "white";
        });
    });
}

function add64x64GridElements() {
    grid.innerHTML = "";

    for (let i = 0; i < 64; i++) {
        const row64 = document.createElement("div");
        row64.className = "grid-row64";

        for (let j = 0; j < 64; j++) {
            const gridElement64 = document.createElement("div");
            gridElement64.className = "grid-element64";
            row64.appendChild(gridElement64);

            gridElement64.addEventListener("mouseover", function(event) {
                if (event.buttons === 1) {
                    if (useRandomColor === true) {
                        this.style.backgroundColor = randomRgbColor();
                    } else {
                        this.style.backgroundColor = selectedColor;
                    }
                }
            });

            gridElement64.addEventListener("click", function() {
                this.style.backgroundColor = selectedColor;
            });
        }

        grid.appendChild(row64);
    }

    const gridElements64 = document.querySelectorAll(".grid-element64");

    resetBtn.addEventListener("click", function() {
        gridElements64.forEach(function(gridElement64) {
            gridElement64.style.backgroundColor = "white";
        });
    });
}

function add80x80GridElements() {
    grid.innerHTML = "";

    for (let i = 0; i < 80; i++) {
        const row80 = document.createElement("div");
        row80.className = "grid-row80";

        for (let j = 0; j < 80; j++) {
            const gridElement80 = document.createElement("div");
            gridElement80.className = "grid-element80";
            row80.appendChild(gridElement80);

            gridElement80.addEventListener("mouseover", function(event) {
                if (event.buttons === 1) {
                    if (useRandomColor === true) {
                        this.style.backgroundColor = randomRgbColor();
                    } else {
                        this.style.backgroundColor = selectedColor;
                    }
                }
            });

            gridElement80.addEventListener("click", function() {
                this.style.backgroundColor = selectedColor;
            });
        }

        grid.appendChild(row80);
    }

    const gridElements80 = document.querySelectorAll(".grid-element80");

    resetBtn.addEventListener("click", function() {
        gridElements80.forEach(function(gridElement80) {
            gridElement80.style.backgroundColor = "white";
        });
    });
}

function add96x96GridElements() {
    grid.innerHTML = "";

    for (let i = 0; i < 96; i++) {
        const row96 = document.createElement("div");
        row96.className = "grid-row96";

        for (let j = 0; j < 96; j++) {
            const gridElement96 = document.createElement("div");
            gridElement96.className = "grid-element96";
            row96.appendChild(gridElement96);

            gridElement96.addEventListener("mouseover", function(event) {
                if (event.buttons === 1) {
                    if (useRandomColor === true) {
                        this.style.backgroundColor = randomRgbColor();
                    } else {
                        this.style.backgroundColor = selectedColor;
                    }
                }
            });

            gridElement96.addEventListener("click", function() {
                this.style.backgroundColor = selectedColor;
            });
        }

        grid.appendChild(row96);
    }

    const gridElements96 = document.querySelectorAll(".grid-element96");

    resetBtn.addEventListener("click", function() {
        gridElements96.forEach(function(gridElement96) {
            gridElement96.style.backgroundColor = "white";
        });
    });
}