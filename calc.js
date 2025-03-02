document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
});

//Adds an event listener for multiple events through using all of the "acceptible" keys on the calc. 
//The four functions, each below, are the solve (each key), the result (enter), back (backspace), and clear (lowercase c)
 
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }

 //solve function, uses getElementById for the value and uses (v) as the value parameter. 

function Result() {
    var num1 = document.getElementById('res').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
    } catch {
       document.getElementById('res').value = 'Error';
    }
 }

 //result function, gets the value variable as number1 and uses it to solve for number2 as the final answer. 

function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }

 //clear function, gets the value variable and clears it as the input variable. 

function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
 }

 //back function, gets the value variable and backspaces it


 const outputBox = document.getElementById('res');
 const clearButton = document.getElementById('clear');
 const backspaceButton = document.getElementById('backspace');
 const divideButton = document.getElementById('divide');
 const sevenButton = document.getElementById('seven');
 const eightButton = document.getElementById('eight');
 const nineButton = document.getElementById('nine');
 const multiplyButton = document.getElementById('times');
 const fourButton = document.getElementById('four');
 const fiveButton = document.getElementById('five');
 const sixButton = document.getElementById('six');
 const subtractionButton = document.getElementById('minus');
 const oneButton = document.getElementById('one');
 const twoButton = document.getElementById('two');
 const threeButton = document.getElementById('three');
 const additionButton = document.getElementById('plus');
 const doubleZero = document.getElementById('double-zero');
 const Zero = document.getElementById('zero');
 const decimalButton = document.getElementById('dot');
 const equalsButton = document.getElementById('equals');

 //adds an event listener to each button based on its ID


clearButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'orange';
})

backspaceButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'orange';
})

divideButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'red';
})

sevenButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'purple';
})

eightButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'purple';
})

nineButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'purple';
})

multiplyButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'purple';
})

fourButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'yellow';
})

fiveButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'yellow';
})

sixButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'yellow';
})

subtractionButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'yellow';
})

oneButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'green';
})

twoButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'green';
})

threeButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'green';
})

additionButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'green';
})

doubleZero.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'blue';
})

Zero.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'blue';
})

decimalButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'blue';
})

equalsButton.addEventListener('click', () => {
   outputBox.style.backgroundColor = 'white';
})

//styles the background color of the output display screen depending on which color is clicked 