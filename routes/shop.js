const express = require('express');
const controllers = require('../controllers/product')
const path = require('path')

const router = express.Router();

router.get('/', controllers.shop);

module.exports = router;