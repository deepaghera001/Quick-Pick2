const mongoose = require('mongoose')

const cart = new mongoose.Schema({
    custId: {
        type: String,
    },
    shopId: {
        type: String,
    },
    productIds: [
        {
            productId: {
                type: String,
                ref: 'product_detail'
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]

})

const cart_detail = mongoose.model('cart_detail', cart)

module.exports = cart_detail;