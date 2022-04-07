const express = require('express')
const routes = express.Router();
const { register_controller, all_users_controller, update_user_controller, delete_user_controller, one_user_controller } = require('../../controllers/shop_controller/register.controller')

routes.get('/', (req, res) => {
    res.status(200).send('hello world!')
})

routes.post('/shop_register', register_controller);

routes.get('/shop_register', all_users_controller);

routes.get('/shop_register/:id', one_user_controller);

routes.put('/shop_register/:id', update_user_controller);

routes.delete('/shop_register/:id', delete_user_controller);

module.exports = routes;