const express = require('express')
const routes = express.Router();
const { customer_register_controller,
    customer_login_controller } = require('../../controllers/customer_controller')

routes.post('/customerRegister', customer_register_controller)

routes.post('/customerLogin', customer_login_controller)

module.exports = routes;