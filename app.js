var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

function soma(a, b) {
  return a + b;
}

function sub(a, b){
  return a - b;
}

function multi(a, b){
  return a * b;
}

function div(a, b){
  return a / b;
}

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
  });

  app.post('/sub', function (req, res) {
    var body = req.body;
    var resultado = sub(body.a, body.b);
    res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultado}`);
    });

    app.post('/multi', function (req, res) {
      var body = req.body;
      var resultado = multi(body.a, body.b);
      res.send(`O resultado da multiplicacao de ${body.a} e ${body.b} é ${resultado}`);
      });

      app.post('/div', function (req, res) {
        var body = req.body;
        var resultado = div(body.a, body.b);
        res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultado}`);
        });
var port = 8888;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});