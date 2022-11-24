const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json')

exports.module = class Cart {
    static addProduct(id) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { product: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent)
            }
        })
    }
}