const express = require('express')
const routes = express.Router();

const { add_to_cart } = require('../../controllers/cart_controller/cart_controller')

routes.post('/cart', add_to_cart);

module.exports = routes;
