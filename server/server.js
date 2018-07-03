let express = require('express');
let bodyParser = require('body-parser');
let addition = require('./addition');
let subtraction = require('./subtraction');
let multiplication = require('./multiplication');
let division = require('./division');

let app = express();
const PORT = 5000;
let answer;
let equation;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

app.post('/inputValues', function(request, response) {
  calculateTotal(request.body);
  response.sendStatus(201);
});

app.get('/answer', function(request, response) {
  console.log(answer);
  response.send(answer);
});

app.get('/equation', function(request, response) {
  console.log(equation);
  response.send(equation);
});

function calculateTotal(objectNum) {
  equation = `${objectNum.x} ${objectNum.operator} ${objectNum.y}`;

  switch (objectNum.operator) {
    case "+":
      answer = addition(objectNum);
      break;
    case "-":
      answer = subtraction(objectNum);
      break;
      case "*":
      answer = multiplication(objectNum);
    break;
    case "/":
      answer = division(objectNum);
      break;
    default:
      return;
  }
}

//Listen at the bottom of page for best practice
app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
});
