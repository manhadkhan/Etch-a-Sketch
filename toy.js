window.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('grid-container');

    //Set grid container style

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '680px';

    //Generate a 16*16 grid
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            container.appendChild(gridItem);
        }
    }
});