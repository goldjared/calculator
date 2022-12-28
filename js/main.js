const displayScreen = document.querySelector('.display');
const memory = {
    numArray0: [],
    numArray1: [],
    operatorArray0: [],
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
    
    if((memory['numArray0']) % 1 != 0) {
        memory['numArray0'] = memory['numArray0'].map(function(value) {
            return Number(value.toFixed(2));
        });
    }
    
    
    displayScreen.textContent = memory['numArray0'];
    memory['numArray1'] = [];
    if(memory['operatorArray0'] != []) {
        console.log('it werks');
        // displayScreen.textContent = memory['numArray0'] memory['operatorArray0'];
        memory['numArray0'] = (memory['numArray0'] + memory['operatorArray0']).split(' ');
        displayScreen.textContent = memory['numArray0'].join('');
        memory['numArray1'] = memory['numArray0'];
    }
    disableDotButton('enable');
}




function display(value) { 
    memory['numArray0'].push(value);
    memory['numArray1'] = memory['numArray0'].join('').split(' ');
    displayScreen.textContent = memory['numArray1'].join('');
    if(value === '.') disableDotButton('disable');
    if(memory['numArray1'].length > 1) {
        disableDotButton('enable');
        if(memory['numArray1'][2].includes('.')) disableDotButton('disable');
    }
    if(memory['numArray1'][3]) {
        memory['operatorArray0'] = ` ${memory['numArray1'][3]} `;
        operate(...memory['numArray1']);
    }
}

function disableDotButton(toggle) {
    if(toggle === 'disable') {
        const dotButton = document.getElementById('grid-button-dot');
        dotButton.style.backgroundColor = '#adff2f';
        dotButton.disabled = true;
    } else if (toggle === 'enable') {
        const dotButton = document.getElementById('grid-button-dot');
        dotButton.style.backgroundColor = null;
        dotButton.disabled = false;
    }
}

function reset() {
    memory['numArray0'] = [];
    displayScreen.textContent = '';
    disableDotButton('enable');
}