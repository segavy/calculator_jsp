
var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

function getInput1() {
    var input1 = document.getElementById('number1');
    var number1 = Number(input1.value);
}

function getInput2 () {
    var input2 = document.getElementById('number2');
    var number2 = Number(input2.value);
}

function onButtonPlusClick() {
    console.log('onButtonPlusClick');
    //var input1 = document.getElementById('number1');
    //var input2 = document.getElementById('number2');
    //var number1 = Number(input1.value);
    //var number2 = Number(input2.value);
    var summ = getInput1() + getInput2();
    //var summ = number1+number2;
    window.alert(summ);
    console.log(summ);
}

function onButtonMinusClick() {
    console.log('onButtonMinusClick');
}

function onButtonMultipleClick() {
    console.log('onButtonMultipleClick');
}

function onButtonDevideClick() {
    console.log('onButtonDevideClick');
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultipleClick);
buttonDevide.addEventListener('click', onButtonDevideClick);


