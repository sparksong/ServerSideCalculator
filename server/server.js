let express = require('express');
let bodyParser = require('body-parser');
// let other = requre('./client.js');

let app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));

app.post('/inputValues', function(request, response) {
  //calculateTotal(request.body);
  response.sendStatus(201);

})




//Listen at the bottom of page for best practice
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
});

// console.log(other);
