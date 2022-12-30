

operations();
function operations() {
    const memory = {
        workingArray: [],
        workingArray1: [],
        workingArray2: [],
    };
    
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(function (button) {
        button.addEventListener('click', function() {
            if((memory['workingArray2'].length > 1 && memory['workingArray1'] 
            != [] && isNaN(button.value)) || button.value === '=') {
                let x = parseFloat(memory['workingArray2'][0]);
                let op = memory['workingArray2'][1];
                let y = parseFloat(memory['workingArray1'][0]);
                console.log(typeof x);
                console.log(op);
                console.log(typeof y);
                console.log(operate(x, op, y));
                return;
            }
            if(isNaN(button.value)) {
                (memory['workingArray1']).push(button.value);
                memory['workingArray2'] = memory['workingArray1'];
                console.log(memory['workingArray2']);
                
                memory['workingArray'] = [];
                console.log(memory['workingArray']);
                return;
            }
            (memory['workingArray']).push(button.value);
            memory['workingArray1'] = (memory['workingArray']).join('').split(' ')
            console.log(memory['workingArray1']);
            if(memory['workingArray2'].length > 1 && memory['workingArray1'] 
            != [] && isNaN(button.value)) {
                // operate(memory['workingArray2'], memory['workingArray1'])
                let x = memory['workingArray2'][0];
                console.log(x);
            }
            
        });
    });
    
    function operate(x, op, y) {
        switch (op) {
            case ('+'): 
                op = add;
                break;
            case ('-'): 
                op = subtract; // could i use returns
                break;
            case ('*'): 
                op = multiply;
                break;
            case ('/'): 
                op = divide;
                break;
        }

        return op(x, y);
    }
}

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
        

