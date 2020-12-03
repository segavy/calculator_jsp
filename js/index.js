
var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

function getInput1() {
    var input1 = document.getElementById('number1');
    var number1 = Number(input1.value);
    return number1;
}

function getInput2 () {
    var input2 = document.getElementById('number2');
    var number2 = Number(input2.value);
    return number2;
}

function onButtonPlusClick() {
    console.log('onButtonPlusClick');
    var summ = getInput1() + getInput2();
    window.alert(summ);
    console.log(summ);
}

function onButtonMinusClick() {
    console.log('onButtonMinusClick');
    var min = getInput1() - getInput2();
    window.alert(min);
}

function onButtonMultipleClick() {
    console.log('onButtonMultipleClick');
    var mult = getInput1() * getInput2();
    window.alert(mult);
}

function onButtonDevideClick() {
    console.log('onButtonDevideClick');
    var dev = getInput1() / getInput2();
    window.alert(dev);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultipleClick);
buttonDevide.addEventListener('click', onButtonDevideClick);


