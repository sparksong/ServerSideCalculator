let methods = {};
let numberOne;
let numberTwo;
let operator;

//Class for creating the calculation object to send to server and do a function
class Calculation {
  constructor( xIn, yIn, operatorIn) {
    this.x = xIn;
    this.y = yIn;
    this.operator = operatorIn;
  }
}

$( document ).ready( readyNow );

function readyNow() {
console.log('Entering readyNow function');

$('#calculateButton').on('click', handleCalculate);
$('#addButton').on('click', handleAdd);
$('#subtractButton').on('click', handleSubtract);
$('#multiplyButton').on('click', handleMultiply);
$('#divideButton').on('click', handleDivide);
$('#resetButton').on('click', handleReset);

console.log('Exiting readyNow function');
}

function handleAdd() {
  console.log('Entering handleAdd');
  operator = $('#addButton').val();
  console.log(`Operator set to: ${operator}`);
  console.log('Exiting handleAdd');
}

function handleSubtract() {
  console.log('Entering handleSubstract');
  operator = $('#subtractButton').val();
  console.log(`Operator set to: ${operator}`);
  console.log('Exiting handleSubtract');
}

function handleMultiply() {
  console.log('Entering handleMultiply');
  operator = $('#multiplyButton').val();
  console.log(`Operator set to: ${operator}`);
  console.log('Exiting handleMultiple');
}

function handleDivide() {
  console.log('Entering handleDivide');
  operator = $('#divideButton').val();
  console.log(`Operator set to: ${operator}`);
  console.log('Exiting handleDivide');
}

function handleCalculate() {
  console.log('Entering handleCalculate');

  let numberOne = $('#numberOne').val();
  let numberTwo = $('#numberTwo').val();

  if(operator == '/' && numberTwo == '0') {
    $('#currentTotal').text('CAN NOT DIVIDE BY 0');
    console.log('Exiting handleCalculate');
    return;
  }
  let calc = new Calculation(numberOne, numberTwo, operator);
  console.log(calc);
$.ajax({
  url: '/inputValues',
  method: 'POST',
  data: {
    x: calc.x,
    y: calc.y,
    operator: calc.operator
  }
}).done(function(response) {
  console.log(response);
  getAnswer();
  getEquation();

}).fail(function(errorResponse) {
  console.log(errorResponse);
});

console.log('Exiting handleCalculate');
}

function getAnswer() {
  $.ajax({
    url: '/answer',
    method: 'GET'
  }).done(function( response ) {
    console.log( response );
    displayNum( response );
  }).fail(function(errorResponse) {
    console.log(errorResponse);
  })
}

function getEquation() {
  $.ajax({
    url: '/equation',
    method: 'GET'
  }).done(function( response ) {
    console.log( response );
    displayEquation( response );
  }).fail(function( errorResponse ) {
    console.log( errorResponse );
  })
}

function displayNum( response ) {
  $('#currentTotal').text( response );
}

function displayEquation( response ) {
  $('#history').append( `<li>${response}</li>` );
}

function handleReset() {
  console.log('Entering handleReset');
  $('#currentTotal').empty();
  $('#history').empty();
  console.log('Exiting handleReset');
}
