/* JS On Screen Calculator
 
  Project: http://www.theodinproject.com/javascript-and-jquery/on-screen-calculator
*/

$(function () {
  var number1 = '',
    number2 = '',
    operator, operator_after, result,
    numSet = false,
    operatorFirstSet = false;

  // Calculations 
  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return x / y;
  }

  // Calculates user inputs 
  var calculate = function (number1, number2, operator) {
    number1 = parseFloat(number1, 10);
    number2 = parseFloat(number2, 10);

    switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
    case "x":
      result = multiply(number1, number2);
      break;
    }
  };

  // Displays result on screen
  var displayResults = function (result) {
    $('.screen').text(result);
  };

  var reset = function () {
    number1 = '';
    number2 = '';
    operator = '';
    $('.screen').text('0');
    numSet = false;
    operatorFirstSet = false;
  };

  // Click event registered to numbers
  $('.number').on('click', function () {
    // First number is set here: 
    if (!numSet) {
      // Dont let user put more than one period in a number
      if (number1.indexOf('.') > -1 && $(this).text() === '.') {
        displayResults(number1);
      } else {
        number1 += $(this).text();
        displayResults(number1);
      }
      // Number 2 is set here:
    } else {
      // Dont let user put more than one period in a number
      if (number2.indexOf('.') > -1 && $(this).text() === '.') {
        displayResults(number2);
      } else {
        number2 += $(this).text();
        displayResults(number2);
      }
    }
  });

  // Set operator click event
  $('.operator').on('click', function () {

    // First operator is set here
    if (!operatorFirstSet && number1 === '') {

      displayResults(0);

    } else if (!operatorFirstSet) {

      operator = $(this).text();
      displayResults(number1);
      operatorFirstSet = true;
      numSet = true;

      // Set first operator to user's last click
    } else if (number2 === '') {
      operator = $(this).text();
      displayResults(number1);
    }
    // Other operators are set here:
    else {

      calculate(number1, number2, operator);
      operator = $(this).text();
      //Display result when next operator is set. 
      displayResults(result);
      // Assign number 1 to be result
      number1 = result;
      number2 = '';
    }

  });

  $('.calculate').on('click', function () {
    calculate(number1, number2, operator);
    displayResults(result);
  });

  $('.reset').on('click', function () {
    reset();
  });

});