
var operationButtons = document.getElementsByClassName('operationButton');
 
function getInput1() {
    var input1 = document.getElementById('number1');
    return Number(input1.value);
}

function getInput2 () {
    var input2 = document.getElementById('number2');
    return Number(input2.value);
}

function onButtonOperate(operateSymbol) {
    if (operateSymbol === '+') {
        var rezult=getInput1() + getInput2();
    } else
    if (operateSymbol === '-') {
        var rezult = getInput1()-getInput2();
    } else
    if (operateSymbol === '*') {
        var rezult = getInput1()*getInput2();
    } else
    if (operateSymbol === '/') {
        var rezult = getInput1()/getInput2();
    }
    window.alert(rezult);
}

function onButtonOperationClick(event) {
    var clickedElement = event.currentTarget;
    var operation = clickedElement.innerHTML;
    onButtonOperate(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onButtonOperationClick);
    }
