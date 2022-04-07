const express = require('express')
const routes = express.Router();
const registration = require('./shop_register/index.register')
const product_details = require('./shop_register/index.product_details')
const order_details = require('./order_detail/index.order_details')
const customer_details = require('./customer_detail/index.customer_details')
const cart_details = require('./cart_detail/index.cart_detail')

routes.use('/', registration);
routes.use('/', product_details);
routes.use('/', order_details);
routes.use('/', customer_details)
routes.use('/', cart_details)

module.exports = routes;