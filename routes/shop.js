const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');
const products = adminData.products;
router.get('/', (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
