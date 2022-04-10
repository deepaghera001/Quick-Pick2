const express = require('express')
const routes = express.Router();
const { product_detail_controller, all_shop_product_controller, one_product_controller, update_product_controller, delete_product_controller, image_controller } = require('../../controllers/shop_controller/product.controller')
const multer = require("multer");
const path = require("path");


routes.get('/', (req, res) => {
  res.status(200).send('hello world!')
})

routes.post('/productDetail', product_detail_controller);

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    console.log('file', file)
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 500 }
})

routes.use('/productImage', express.static('upload/images'))

routes.post('/upload/:productId', upload.single('productImage'), image_controller)

routes.get('/productDetail/shop/:shop_id', all_shop_product_controller);

routes.get('/productDetail/:product_id', one_product_controller);

routes.put('/productDetail/:product_id', update_product_controller);

routes.delete('/productDetail/:shop_id/:product_id', delete_product_controller);

module.exports = routes;
