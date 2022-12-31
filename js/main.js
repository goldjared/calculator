operations();
function operations() {
    let num1 = '';
    let num2 = '';
    let ops = '';
    
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(function (button) {
        button.addEventListener('click', function() {

            if(button.value === 'clear') return reset();

            if(ops === '/' && num2 === '0' && isNaN(button.value)) {
                displayTop('ERROR');
                num1 = '';
                num2 = '';
                ops = '';
                return;
            }

            if(ops === '' && (!isNaN(button.value) || button.value === '.')) {
                if(ops === '' && button.value === '.') disableDotButton('disable');
                num1 += button.value;
                displayTop(num1);
                console.log('1st if ' +num1);
                
            }

            if(num1 != '' && num2 != '' && ops != '' && button.value === '=') {
                num1 = operate(parseFloat(num1), parseFloat(num2), ops);
                num1 = num1.toFixed(2);
                displayBottom(num1);
                num2 = '';
                ops = '';
                disableDotButton('enable');
                
                console.log('5th if ' +num1);
                
                return;
            }

            if(ops != '' && isNaN(button.value) && button.value != '.') {
                num1 = operate(parseFloat(num1), parseFloat(num2), ops);
                num1 = num1.toFixed(2);
                displayBottom(num1);
                ops = button.value;
                displayTop((num1+ops));
                disableDotButton('enable');
                num2 = '';
                console.log('2nd if ' +num1);
                return;
            }

            if(isNaN(button.value) && button.value != '=' && button.value != '.') {
                ops = button.value;
                displayTop((num1+ops));
                disableDotButton('enable');
                console.log('3rd if ' +ops);
                return;
            }
            
            if(ops != '' && button.value != '=') {
                num2 += button.value;
                displayTop((num1+ops+num2));
                if(ops != '' && button.value != '=' && button.value === '.') return disableDotButton('disable');
                console.log('4th if ' +num2);
                return;
            }
         });
     });

    function displayTop(...x) {
        const displayTop = document.querySelector('.display-one');
        displayTop.textContent = x;
    }

    function displayBottom(x) {
        const displayTop = document.querySelector('.display-two');
        displayTop.textContent = x;
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
        num1 = '';
        num2 = '';
        ops = '';
        disableDotButton('enable');
        displayTop('');
        displayBottom('');
    }
    
    function operate(x, y, ops) {
        switch (ops) {
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


        

