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
                memory['workingArray'] = [operate(x, op, y)];
                displayBottom(memory['workingArray']);//experimenting with changing this array no.,
                //it changes how to isNaN reacts
                return;
            }

            if(isNaN(button.value)) {
                (memory['workingArray1']).push(button.value);
                memory['workingArray2'] = memory['workingArray1'];
                displayTop((memory['workingArray2']).join(''));
                
                memory['workingArray'] = [];
                return;
            }

            (memory['workingArray']).push(button.value);
            memory['workingArray1'] = (memory['workingArray']).join('').split(' ');
            // console.log(memory['workingArray']);
            

            if(memory['workingArray2'] != []) return displayTop((memory['workingArray2']).join('') + (memory['workingArray1']));
            displayTop(memory['workingArray1']);
        });
    });
    function displayTop(x) {
        const displayTop = document.querySelector('.display-one');
        displayTop.textContent = x;

        
    }
    function displayBottom(x) {
        const displayTop = document.querySelector('.display-two');
        displayTop.textContent = x;
    }
    
    function operate(x, op, y) {
        switch (op) {
            case ('+'): 
                return x + y;
            case ('-'): 
                return x - y;
            case ('*'): 
                return x * y;
            case ('/'): 
                return x / y;
        }

        
    }
}
        

