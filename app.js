//NODE Dependencies
const http = require('http');

//3rd Dependencies
const express = require('express');
const bodyParser = require('body-parser');
//Main
const app = express();
const adminRouters = require('./routes/admin');
const shopRouter = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouters);
app.use(shopRouter);
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});
const server = http.createServer(app);
server.listen(3000);
