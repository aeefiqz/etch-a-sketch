const container = document.querySelector('.container');
const content = document.querySelector('.content');
const reset = document.querySelector('.reset-btn');


function CreateGrid(size) {
    // create the container element
   
    // set the container style
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;

    // create the grid items
    for (let i = 0; i < size * size; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);

        gridItem.addEventListener('mouseover', function (e) {
            console.log(e);
            gridItem.style.backgroundColor = "red";
        });

        reset.addEventListener('click', function (e) {
            console.log(e);
            gridItem.style.backgroundColor = 'white'; 
            
        });
    }
    
 
    

    content.appendChild(container);
};

CreateGrid(16);

