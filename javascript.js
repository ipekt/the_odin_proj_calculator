$(document).ready(function(){

  function add(x,y) { return x + y; }
  function subtract(x,y) { return x - y; }
  function multiply(x,y) { return x * y; }
  function divide(x,y) { return x / y; }
    
  var num1 = "";
  var num2 = "";
  var operant;
  var result = 0;
  var operationSet = false;

  function calculate(x,y,operant) {
    x = parseInt(x);
    y = parseInt(y);
    switch (operant) {
      case "+":
        result = add(x,y);
        break;
      case "-":
        result = subtract(x,y);
        break;
      case "/":
        result = divide(x,y);
        break;
      case "x":
        result = multiply(x,y);
        break;
    }
    $('#result').text(result);
    console.log('calc ' + result);
    return continueCalc(result);
  }

  function reset() {
    $('#result').text('');
    operationSet = false;
    num1 = '';
    num2 = '';
  }

  function continueCalc(res) {
    //operationSet = false;
    num1 = String(res);
    num2 = '';
    console.log('after num1 ' + num1);
    console.log('after num2 ' + num2);
    console.log('operationSet ' + operationSet);
  }

  $('.button').on('click', function(){   
    if (!operationSet && $(this).is(".num")) {
      num1 = num1 + $(this).text();
      $('#result').text(num1);
      console.log('num1 ' + num1);
    }
    // else if ($(this).is(".operant")) {
    //   operant = $(this).text();
    //   $('#result').text('');
    //   $('#result').text(operant);
    //   operationSet = true;
    // }
    else if (operationSet && $(this).is(".num")) {
      num2 = num2 + $(this).text();
      $('#result').text(num2);
      console.log('num2 ' + num2);
    }    
  });

  $('.operant').on('click', function(){
    // operation isnt set
    if (!operationSet) {
      operant = $(this).text();
      $('#result').text('');
      $('#result').text(operant);
      console.log('operant ' + operant);
      operationSet = true;
    }
    else {
      operant = $(this).text();
      console.log('operant else  ' + operant);
      //operationSet = false;
      return calculate(num1, num2, operant);
    }
    
  });  
  
  $('.calculate').on('click', function(){
    if (operationSet) {
      return calculate(num1, num2, operant);
    }
    else {
      console.log('error');
    }
  });

  $('.reset').on('click', function(){
    return reset();
  });

});
