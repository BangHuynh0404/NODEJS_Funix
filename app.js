const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const app = express();

//Khai báo template enginne
app.set('view engine', 'ejs');

//Khai bao thư mục chứa các template engine
app.set('views', 'views');

//Khai báo biến  router (File js chứa định hướng cho 1 route cụ thể)
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

//Khai báo thư mục public nguồn các file
app.use(express.static(path.join(__dirname, 'public')));

//Sử dụng các biến router đã khai báo
//Để ý sự khác biệt của router admin & shop
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
