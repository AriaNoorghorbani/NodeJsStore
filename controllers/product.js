const products = []

exports.getProducts = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' })
}

exports.postProducts = (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
}

exports.shop = (req, res, next) => {
    res.render('shop', {
        prods: products,
        pageTitle: 'My Shop',
        path: '/',
        hasProduct: products.length > 0,
        productCss: true,
        activeShop: true
    });
}

