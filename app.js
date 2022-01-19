//NODE Dependencies
const http = require('http');

//3rd Dependencies
const express = require('express');
const bodyParser = require('body-parser');
//Main
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello</h1>');
});

const server = http.createServer(app);
server.listen(3000);
