const colorBtn = document.querySelector('.colorBtn');
const bodyBackground = document.querySelector('body');
const spanHexColor = document.querySelector('.hex');

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

function changeColor() {
    let color = '#';
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);
        color += hexNumbers[random];
    }

    bodyBackground.style.backgroundColor = color;
    spanHexColor.innerHTML = color;
}

colorBtn.addEventListener('click', changeColor);