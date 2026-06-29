const container = document.querySelector('.container');
const button = document.querySelector('button');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    }
}

button.addEventListener('click', () => {
    let size = prompt('Sa katror per ane (max 100)?');
    if (size > 100) {
        alert('Maksimumi eshte 100!');
        return;
    }
    container.innerHTML = '';
    createGrid(size);
});

createGrid(16);