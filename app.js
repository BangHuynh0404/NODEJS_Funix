//NODE Dependencies
const http = require('http');
const path = require('path');
//3rd Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
//Main
const app = express();
app.set('views', 'views'); //in pug view is after
app.engine('hbs', expressHbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: '404' });
});
const server = http.createServer(app);
server.listen(3000);
