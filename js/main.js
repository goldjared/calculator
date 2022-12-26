const displayScreen = document.querySelector('.display');
const memory = {
    numArray0: [],
    numArray1: [],
    numArray2: []
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
    console.log(x, op, y);
    console.log(typeof x, typeof op, typeof y);
    console.log('op is',op);
     switch (op) {
        case (' + '): 
            op = add;
            break;
     }
     console.log(op);
    //  else if(op = ' * ') op = multiply;
    //  else if(op = ' / ') op = divide;
    // if(op = ' * ') op = 'multiply';
    // if(op = ' / ') op = 'divide';
    console.log(op(parseInt(x), parseInt(y)));
    console.log(op);
    //let sum be the only value in the array, display the array.
    
    
}




function display(value) {
    
    memory['numArray0'].push(value);
    memory['numArray1'] = memory['numArray0'].join('').split(' ');
    // console.log(equation);
    // if(!Number.isInteger(value)) {
    //     let x = memory['numArray0'].join('');
    //     console.log(x);
    // }
    
    // if(value != Number)
    
    displayScreen.textContent = memory['numArray0'].join(''); //need to convert numarray to string
    
}

function reset() {
    memory['numArray0'] = [];
    displayScreen.textContent = '';

}