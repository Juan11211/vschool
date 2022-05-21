
var readlineSync = require('readline-sync');

var input;
var num1;
var num2;
var result;
var operation = false;


while(!operation) {
  input = readlineSync.question('What operation would you like to perform? ');
  if (input === '+'
    || input === '-'
    || input === '/'
    || input === '*') {
      operation = true;
  } else {
    console.log('That is not a valid operation!')
  }
}

num1 = readlineSync.question('Please enter the first number: ');
num2 = readlineSync.question('Please enter the second number: ');

function evaluate(firstNum, secondNum) {
  if (input === '+') {
    return firstNum + secondNum;
  } else if (input === '-') {
    return firstNum - secondNum;
   } else if (input === '/') {
    return firstNum / secondNum;
   } else if (input === "*") {
    return firstNum * secondNum;
  }
} 
result = evaluate(num1, num2)
console.log('The result is: ' + result);