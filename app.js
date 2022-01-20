//NODE Dependencies
const http = require('http');
const path = require('path');
//3rd Dependencies
const express = require('express');
const bodyParser = require('body-parser');
//Main
const app = express();
const adminRouters = require('./routes/admin');
const shopRouter = require('./routes/shop');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRouters);
app.use(shopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
const server = http.createServer(app);
server.listen(3000);
