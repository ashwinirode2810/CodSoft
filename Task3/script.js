
let display = document.getElementById('display');
let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clearDisplay);

function handleButtonClick(event) {
    if (event.target.innerText === '=') {
        calculate();
    } else if (event.target.innerText === 'C') {
        clearDisplay();
    } else {
        appendToDisplay(event.target.innerText);
    }
}

function appendToDisplay(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}