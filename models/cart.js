const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json')

exports.module = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart 
        fs.readFile(p, (err, fileContent) => {
            let cart = { product: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent)
            }
            // Analyze the cart => Find existing product
            const existingProduct = cart.product.find(prod => prod.id === id)
            let updatedProduct
            // Add new product/ increase quantity
            if (existingProduct) {
                updatedProduct = { ...existingProduct }
                updatedProduct.qty = updatedProduct.qty + 1
            } else {
                updatedProduct = { id: id, qty: 1 }
            }
            cart.totalPrice = cart.totalPrice + productPrice
        })
    }
}