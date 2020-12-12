
var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

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

function onButtonPlusClick() {
    onButtonOperate('+');
}

function onButtonMinusClick() {
    onButtonOperate('-');
}

function onButtonMultipleClick() {
    onButtonOperate('*');
}

function onButtonDevideClick() {
    onButtonOperate('/');
}


buttonPlus.addEventListener('click', onButtonOperationClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultipleClick);
buttonDevide.addEventListener('click', onButtonDevideClick);

