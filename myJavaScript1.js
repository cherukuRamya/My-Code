// Get the input field and buttons
const display = document.getElementById('display');
const equal = document.getElementById('equal');
const backspace = document.getElementById('backspace');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
// Add event listeners to buttons
one.addEventListener('click', () => display.value += '1');
two.addEventListener('click', () => display.value += '2');
three.addEventListener('click', () => display.value += '3');
four.addEventListener('click', () => display.value += '4');
five.addEventListener('click', () => display.value += '5');
six.addEventListener('click', () => display.value += '6');
seven.addEventListener('click', () => display.value += '7');
eight.addEventListener('click', () => display.value += '8');
nine.addEventListener('click', () => display.value += '9');
zero.addEventListener('click', () => display.value += '0');
add.addEventListener('click', () => display.value += '+');
subtract.addEventListener('click', () => display.value += '-');
multiply.addEventListener('click', () => display.value += '*');
divide.addEventListener('click', () => display.value += '/');
//most imp line (equal is the id  od symbol,addEventListener are the listeners and here the magic is eval(display.value))
//bcz eval()in is a magic world in javascript that we dont need any operational calculations because it automatically evaluates the symbols and  display the value 

equal.addEventListener('click', () => display.value = eval(display.value));

//slice is used for deleting the last digit number  ans 0 and -1 are the indexes 
backspace.addEventListener('click', () => display.value = display.value.slice(0, -1));
clear.addEventListener('click', () => display.value = '');



  