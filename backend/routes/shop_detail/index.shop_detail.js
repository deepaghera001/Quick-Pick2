const express = require('express')
const routes = express.Router();
const { register_shop_controller, all_shops_controller, update_shop_controller, delete_shop_controller, one_shop_controller, login_shop_controller } = require('../../controllers/shop.controller')


routes.post('/shop_register', register_shop_controller);

routes.get('/shop_register', all_shops_controller);

routes.get('/shop_register/:id', one_shop_controller);

routes.put('/shop_register/:id', update_shop_controller);

routes.delete('/shop_register/:id', delete_shop_controller);

routes.post('/shop_login', login_shop_controller);

module.exports = routes;