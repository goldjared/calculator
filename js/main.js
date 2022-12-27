const displayScreen = document.querySelector('.display');
const memory = {
    numArray0: [],
    numArray1: [],
};

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, op, y) {
     switch (op) {
        case ('+'): 
            op = add;
            break;
        case ('-'): 
            op = subtract;
            break;
        case ('*'): 
            op = multiply;
            break;
        case ('/'): 
            op = divide;
            break;
     }
    memory['numArray0'] = [op(parseFloat(x), parseFloat(y))];
    memory['numArray1'] = [];
    displayScreen.textContent = memory['numArray0'];
    }




function display(value) { 
    memory['numArray0'].push(value);
    memory['numArray1'] = memory['numArray0'].join('').split(' ');
    displayScreen.textContent = memory['numArray0'].join(''); //need to convert numarray to string
}

function reset() {
    memory['numArray0'] = [];
    displayScreen.textContent = '';
}