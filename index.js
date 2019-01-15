window.onload = function (e) {
    var firstNum = document.querySelector('#first-number');
    var secondNum = document.querySelector('#second-number');
    var calculate = document.querySelector('#calculate');
    var res = document.querySelector('.res');
    var addition = document.querySelector('#addition');
    var  subtraction= document.querySelector('#subtraction');
    var multiplication = document.querySelector('#multiplication');
    var divide = document.querySelector('#divide');
    var divide1 ;

    // console.log(calculate);

    calculate.onclick = function () {
        if (firstNum.value && secondNum.value) {
            console.log(firstNum.value);

        }
        else alert('Enter numbers');

    }
  /* divide.onclick = function () {
    console.log('divide1',divide1);
   }*/
function devideNum() {
   devide1 = true;
   console.log('Ура');
}

}