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



const outputDisplay = document.querySelector('#output');
 
 
const buttonValues = document.getElementById('');

buttonValues.addEventListener('click', () => {
   outputDisplay.style.backgroundColor = 'red';
});

