const express = require('express')
const routes = express.Router();
const AuthenticateCustomer = require("../../middleware/AuthenticateCustomer");
const { add_to_cart, get_cart, get_shop_cart } = require('../../controllers/cart_controller')

// AuthenticateCustomer
routes.post('/addtocart', AuthenticateCustomer, add_to_cart);
// AuthenticateCustomer
routes.get('/getcart', AuthenticateCustomer, get_cart);

// api to get one shop all product added in cart
routes.get('/getcart/:shop_id', AuthenticateCustomer, get_shop_cart);
// Add get cart api here

module.exports = routes;
