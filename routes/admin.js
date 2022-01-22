const path = require('path');
const express = require('express');
const router = express.Router();

const productsContrroller = require('../controllers/products')
// /admin/add-product => GET
router.get('/add-product', productsContrroller.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsContrroller.postAddProduct);

module.exports = router;

