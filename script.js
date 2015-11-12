/* JS On Screen Calculator
  Project: http://www.theodinproject.com/javascript-and-jquery/on-screen-calculator
*/

function ready(calculateMe) {
  if (document.readyState != 'loading'){
    calculate();
  } else {
    document.addEventListener('DOMContentLoaded', calculateMe);
  }
}

var calculateMe = function () {

  var number1 = '',
    number2 = '',
    operator, operator_after, result,
    numSet = false,
    operatorFirstSet = false;

  var operators = {
    add: function (x, y) {
      return x + y;
    },
    subtract: function (x, y) {
      return x - y;
    },
    multiply: function (x, y) {
      return x * y;
    },
    divide: function (x, y) {
      return x / y;
    }
  };
 
  // Calculates user inputs 
  var calculate = function (number1, number2, operator) {
    number1 = parseFloat(number1, 10);
    number2 = parseFloat(number2, 10);

    switch (operator) {
    case "+":
      result = operators.add(number1, number2);
      break;
    case "-":
      result = operators.subtract(number1, number2);
      break;
    case "/":
      result = operators.divide(number1, number2);
      break;
    case "x":
      result = operators.multiply(number1, number2);
      break;
    }
  };

  // Displays result on screen
  var displayResults = function (result) {
    document.querySelector('.screen').innerHTML = result;
  };

  var reset = function () {
    number1 = '';
    number2 = '';
    operator = '';
    document.querySelector('.screen').innerHTML = '0';
    numSet = false;
    operatorFirstSet = false;
  };

  // Click event registered to numbers
  var numbers = document.querySelectorAll('.number');
  
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {

      var selectedNum = this.innerHTML; 

      if (!numSet) {
      // Dont let user put more than one period in a number
        if (number1.indexOf('.') > -1 && selectedNum === '.') {
          displayResults(number1);
        } else {
          number1 += selectedNum;
          displayResults(number1);
        }
      // Number 2 is set here:
    } else {
      // Dont let user put more than one period in a number
      if (number2.indexOf('.') > -1 && selectedNum === '.') {
        displayResults(number2);
      } else {
        number2 += selectedNum;
        displayResults(number2);
      }
    }
    });
  }


  // Click event registered to operators
  var operatorElements = document.querySelectorAll('.operator');
  
  for (var j = 0; j < operatorElements.length; j++) {
    operatorElements[j].addEventListener('click', function () {

      var selectedOperator = this.innerHTML;
      
      if (!operatorFirstSet && number1 === '') {

        displayResults(0);

      } else if (!operatorFirstSet) {

        operator = selectedOperator;
        displayResults(number1);
        operatorFirstSet = true;
        numSet = true;

        // Set first operator to user's last click
      } else if (number2 === '') {
        operator = selectedOperator;
        displayResults(number1);
      }
      // Other operators are set here:
      else {
        calculate(number1, number2, operator);
        operator = selectedOperator;
        //Display result when next operator is set. 
        displayResults(result);
        // Assign number 1 to be result
        number1 = result;
        number2 = '';
      }
    });
  }

  document.querySelector('.calculate').addEventListener('click', function () {
    calculate(number1, number2, operator);
    displayResults(result);
  });

  document.querySelector('.reset').addEventListener('click', reset);

}

ready(calculateMe);
