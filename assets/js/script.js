let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

