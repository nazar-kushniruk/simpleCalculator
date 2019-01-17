window.onload = function () {
    var firstNum = document.querySelector('#first-number');
    var secondNum = document.querySelector('#second-number');
    var calculate = document.querySelector('#calculate');
    var res = document.querySelector('.res');
    var mathActionSelected = false;
    var mathActionElem = false;
    var buttons = document.querySelectorAll('.math-elem');
    var buttonsBlock = document.querySelector('.buttons-block');


    buttonsBlock.onclick = function (e) {
        mathActionSelected = true;

        mathActionElem = e.target;
        mathActionElem.disabled = true;
        // console.log(buttons);
        // console.log(disabledButton);

        if (calculate.disabled) {
            calculate.disabled = false;
        }
        buttons.forEach(function (item) {
            // console.log(item.id);
            if (item.id !== mathActionElem.id) {
                item.disabled = false;
                //
                // console.log(i);
            }
        });
    };
    calculate.onclick = function () {
        if (firstNum.value && secondNum.value) {
            if (mathActionSelected) {
                res.innerHTML = count(firstNum, secondNum, mathActionElem);
                this.disabled = true;
                mathActionSelected = false;
            } else alert('Select math operation');

        } else alert('Enter numbers');

    };


    function count(item1, item2, item) {
        const result;
        const firstNum = parseFloat(item1.value);
        const secondNum = parseFloat(item2.value);

        switch (item.id) {

            case 'addition':
                result = firstNum + secondNum;
                break;
            case 'subtraction':
                result = firstNum - secondNum;
                break;
            case 'multiplication':
                result = firstNum * secondNum;
                break;
            case 'division':
                result = firstNum / secondNum;
                break;
        }
        console.log(result);
        return result;
    }
}
