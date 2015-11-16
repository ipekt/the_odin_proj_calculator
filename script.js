//JS On Screen Calculator
//  Project: http://www.theodinproject.com/javascript-and-jquery/on-screen-calculator

/*globals document*/

function ready(calculateMe) {
  if (document.readyState != 'loading') {
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

  var operations = {
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
      result = operations.add(number1, number2);
      break;
    case "-":
      result = operations.subtract(number1, number2);
      break;
    case "/":
      result = operations.divide(number1, number2);
      break;
    case "x":
      result = operations.multiply(number1, number2);
      break;
    }
  };

  // Displays result on screen
  var displayResults = function (result) {
    document.querySelector('.screen').innerHTML = result;
  };

  // Reset state of the calculator
  var reset = function () {
    number1 = '';
    number2 = '';
    operator = '';
    document.querySelector('.screen').innerHTML = '0';
    numSet = false;
    operatorFirstSet = false;
  };

  //  Set numbers
  var setNumber = function(n, selectedNum) {
    // A number cant have multiple periods in it,
    // therefore dont change the number with coming data, display simple
    if (n.indexOf('.') > -1 && selectedNum === '.') {
      return n;
    } else {
      // If period is selected as first digit, updater number to be .0
      if (n.length === 0 && selectedNum === '.') {
        selectedNum = '0.';
      }
      return selectedNum;
    }
  };

  // Click event registered to numbers
  var numbers = document.querySelectorAll('.number');

  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
      var selectedNum = this.innerHTML;

      if (!numSet) {
        number1 += setNumber(number1, selectedNum);
        displayResults(number1);
      } else {
        number2 += setNumber(number2, selectedNum);
        displayResults(number2);
      }
    });
  }

  // Click event registered to operators
  var operators = document.querySelectorAll('.operator');

  for (var j = 0; j < operators.length; j++) {
    operators[j].addEventListener('click', function () {

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

  // Click event registered to equal operator
  document.querySelector('.calculate').addEventListener('click', function () {
    calculate(number1, number2, operator);
    displayResults(result);
  });

  // Click event registered to reset operator
  document.querySelector('.reset').addEventListener('click', reset);

}

ready(calculateMe);

module.exports = { calculateMe: calculateMe };
