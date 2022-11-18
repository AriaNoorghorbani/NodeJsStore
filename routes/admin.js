const express = require('express')
const router = express.Router()
const path = require('path')

const products = []

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    res.render('add-product', { pageTitle: 'Add Product',  })
});

router.post('/add-product', (req, res, next) => {
    products.push(req.body.title)
    // console.log(req.body.title);
    res.redirect('/')
})

// module.exports = router
exports.routes = router;
exports.products = products