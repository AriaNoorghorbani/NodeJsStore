const express = require('express')
const router = express.Router()
const controllers = require('../controllers/product')
const path = require('path')

router.get('/add-product', controllers.getProducts);

router.post('/add-product', controllers.postProducts)

module.exports = router