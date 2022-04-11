const express = require('express')
const routes = express.Router();
const AuthenticateCustomer = require("../../middleware/AuthenticateCustomer");
const { add_to_cart, get_cart } = require('../../controllers/cart_controller')

// AuthenticateCustomer
routes.post('/addtocart', AuthenticateCustomer, add_to_cart);
// AuthenticateCustomer
routes.get('/getcart', get_cart);

// Add get cart api here

module.exports = routes;
