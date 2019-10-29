var express = require('express');
var router = express.Router();

var operations = ["+", "-", "*", "/"];

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
    res.send('Mathemagica works');
});

// define the about route
router.get('/about', function(req, res) {
    res.send('Mathemagica is a game about math and magic');
});

router.get('/new', function(req, res) {
    const operator = operations[Math.floor(Math.random()*4)];
    const firstNumber1 = Math.floor(Math.random()*1000);
    const secondNumber1 = Math.floor(Math.random()*1000);
    const firstNumber2 = Math.floor(Math.random()*1000);
    const secondNumber2 = Math.floor(Math.random()*1000);
    const firstNumber3 = Math.floor(Math.random()*1000);
    const secondNumber3 = Math.floor(Math.random()*1000);
    const operation1 = firstNumber1.toString() + operator.toString() + secondNumber1.toString();
    const operation2 = firstNumber2.toString() + operator.toString() + secondNumber2.toString();
    const operation3 = firstNumber3.toString() + operator.toString() + secondNumber3.toString();
    const maths = [operation1, operation2, operation3];
    var finalOp = maths[Math.floor(Math.random()*3)];
    res.send({
        "math": finalOp.toString(),
        "result1": eval(operation1).toString(),
        "result2": eval(operation2).toString(),
        "result3": eval(operation3).toString()
    });
});

module.exports = router;