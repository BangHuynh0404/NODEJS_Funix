const path = require('path');

const express = require('express');

const productsContrroller = require('../controllers/products')
const router = express.Router();

router.get('/', productsContrroller.getProducts);

module.exports = router;
