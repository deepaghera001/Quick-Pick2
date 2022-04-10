const express = require('express')
const routes = express.Router();
const AuthenticateCustomer = require("../../middleware/AuthenticateCustomer");
const { add_to_cart } = require('../../controllers/cart_controller')

routes.post('/cart', AuthenticateCustomer, add_to_cart);

module.exports = routes;
