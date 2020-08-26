let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount =document.querySelector('#lowerCountBtn');

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

let count = 0;

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if(counter.innerHTML > '0') {
        counter.style.color = '#d3f132';
    }else if(counter.innerHTML === '0'){
        counter.style.color = '#fff';
    }

    //animação
    counter.animate(
        [
            {opacity: '0.2'},
            {opacity: 1.0}
        ], 
        {duration:500, fill: 'forwards'}
    )
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if(counter.innerHTML < '0') {
        counter.style.color = '#ff4500'
    }else if(counter.innerHTML === '0'){
        counter.style.color = '#fff';
    }
    counter.animate(
        [
            {opacity: '0.2'},
            {opacity: 1.0}
        ], 
        {duration:500, fill: 'forwards'}
    )
}