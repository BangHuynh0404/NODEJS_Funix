//NODE Dependencies
const http = require('http');

//3rd Dependencies
const express = require('express');

//Main
const app = express();
app.use((req, res, next) => {
  console.log('Hello middleware');
  next();
});
app.use((req, res, next) => {
  console.log('Hello middleware 22');
  res.send('<h1>Hello</h1>');
});
const server = http.createServer(app);
server.listen(3000);
