const express = require('express')
const routes = express.Router();
const { order_controller, get_order_of_customer, get_order_of_shop } = require('../../controllers/order_constroller.js')

// routes.get('/getreq', order_controller);

routes.post('/makeOrder', order_controller)

routes.get('/customerOrders/:id', get_order_of_customer);

routes.get('/shopOrders/:id', get_order_of_shop);

module.exports = routes;