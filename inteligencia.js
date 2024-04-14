let displayValue = '0';
let operator = '';
let firstOperand = null;
let waitingForSecondOperand = false;

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function clearLastDigit() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = '0';
    }
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0' || waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    if (operator !== '' && !waitingForSecondOperand) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(displayValue);
    waitingForSecondOperand = true;
}

function calculate() {
    if (operator === '+') {
        displayValue = (firstOperand + parseFloat(displayValue)).toString();
    } else if (operator === '-') {
        displayValue = (firstOperand - parseFloat(displayValue)).toString();
    } else if (operator === '*') {
        displayValue = (firstOperand * parseFloat(displayValue)).toString();
    } else if (operator === '/') {
        displayValue = (firstOperand / parseFloat(displayValue)).toString();
    }
    operator = '';
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}


updateDisplay();
