const DEFAULT_COLOR = document.querySelector('#colorPicker').value
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

// input and buttons
const colorPicker = document.querySelector('#colorPicker');
const colorBtn = document.querySelector('#colorBtn');
const rainBowBtn = document.querySelector('#rainBowBtn');
const eraserBtn = document.querySelector('#eraserBtn');
const clearBtn = document.querySelector('#clearBtn');
const rangeValue = document.querySelector('#sizeValue')
const rangeSlider = document.querySelector('#sizeSlider');
// grid
const grid = document.querySelector('.grid');
const content = document.querySelector('.content');


function setCurrentColor(newColor) {
    currentColor = newColor;
}
function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode;
}
function setCurrentSize(newSize) {
    currentSize = newSize;
}

function clearGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(DEFAULT_SIZE);
}

 
colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color');
rainBowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => clearGrid();

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createGrid(size) {
    // create the grid container element
   
    // set the container style
    grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    grid.style.gridTemplateRows = `repeat(${size},1fr)`;
    
    // create the grid items
    for (let i = 0; i < size * size; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.addEventListener('mouseover', changeColor)
        grid.addEventListener('mousedown', changeColor)
        grid.appendChild(gridItem);
    }
    
};

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
      } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
      } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = '#fefefe'
      }
}
function activateButton(newMode){
    if (currentMode === 'rainbow') {
        rainBowBtn.classList.remove('active');
    } else if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    } else if (currentMode === 'eraser') {
        eraserBtn.classList.remove('active');
    }

    if (newMode === 'rainbow') {
        rainBowBtn.classList.add('active');
    } else if (newMode === 'color') {
        colorBtn.classList.add('active');
    } else if (newMode === 'eraser') {
        eraserBtn.classList.add('active')
    }
}


// // clear the drawing and reset the grid
// clearBtn.addEventListener('click', function (e) {
//     console.log(e);
  
//     // Remove all the grid items
//     while (grid.firstChild) {
//       grid.removeChild(grid.firstChild);
//     }
  
//     // Recreate the grid with the initial size
//     CreateGrid(16);
//   });
window.onload = () => {
    createGrid(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE)
}
