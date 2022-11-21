// const fs = require('fs')
// const path = require('path')

// const pwd =
//     path.join(path.dirname(process.cwd()), 'data', 'products.json')

// const p = path.join(
//     path.dirname(process.mainModule.filename),
//     'data',
//     'products.json'
// );


// module.exports = class Product {
//     constructor(t) {
//         this.title = t
//     }

//     save() {
//         // const p = pwd()

//         //##siavash way
//         // try {
//         //     const fileContent = await fs.readFile(p)
//         //     const asb = JSON.parse(fileContent)
//         //     products.push(asb)
//         //     fs.writeFile(p, JSON.stringify(products))
//         //     console.log(asb);
//         // } catch {
//         //     return []
//         // }

//         fs.readFile(p, (err, fileContent) => {
//             let products = []
//             if (!err) {
//                 products = JSON.parse(fileContent)
//             }
//             products.push(this)
//             fs.watchFile(p, JSON.stringify(products), (err) => {
//                 console.log(err);
//             })
//         })
//     }

//     static fetchAll(cb) {
//         // const p = pwd()
//         fs.readFile(p, (err, fileContent) => {
//             if (err) {
//                 cb([])
//             }
//             cb(JSON.parse(fileContent))
//         })

//         // try {
//         //     // const fileContent = fs.readFileSync(p)
//         //     const fileContent = await fs.readFile(p)
//         //     return JSON.parse(fileContent)
//         // } catch (error) {
//         //     return [];
//         // }
//     }
// }

const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};

