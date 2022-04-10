const product_Schema = require('../../model/shopDetails/product_schema')
const register_schema = require('../../model/shopDetails/register_schema')

const mongoose = require('mongoose');

const fs = require('fs')

module.exports = {
    product_detail_controller: async (req, res) => {
        try {
            console.log('hello')
            const {
                shop_id,
                name,
                description,
                stock,
                price,
                tags
            } = req.body;
            const user_found = await register_schema.findOne({ _id: shop_id });

            !user_found && res.status(400).json({
                message: 'shop is not registered'
            })

            const product = new product_Schema({
                shop_id,
                name,
                description,
                stock,
                price,
                tags
            })

            const saved_product = await product.save();

            // response = {
            //     status: true,
            //     statusCode: 200,
            //     message: 'Product detail is added successfully.',
            //     productDetail: saved_product
            // }
            res.status(200).json({
                message: 'added',
                userdata: saved_product
            })

            // const product_found = await product_Schema.findOne({ user_id })
            // console.log(user_found, product_found)

            // if (user_found && product_found) {
            //     console.log('hello')
            //     const success = await product_Schema.findOneAndUpdate({ user_id }, {
            //         $push: {
            //             all_products: all_products
            //         }
            //     }); //add new obj in array

            //     const response = {
            //         status: true,
            //         statusCode: 200,
            //         message: 'Product detail is added successfully.',
            //         userdata: success
            //     }
            //     res.status(200).send(response)
            // }
            // else if (user_found) {
            //     const product = await add.save();
            //     const response = {
            //         status: true,
            //         statusCode: 200,
            //         message: 'Product detail is added successfully.',
            //         userdata: product
            //     }
            //     res.status(200).send(response)
            // }
            // else {
            //     const response = {
            //         status: false,
            //         statusCode: 400,
            //         message: 'Please Enter correct user id',
            //     }
            //     res.status(400).send(response)
            // }
        } catch (error) {
            console.log(error)
            res.status(500).send('server crashed.')
        }
    },
    all_shop_product_controller: async (req, res) => {
        try {

            const product_details = await product_Schema.find({ shop_id: req.params.shop_id }).populate('shop_id');
            if (product_details) {
                console.log(product_details)
                var response = {
                    status: true,
                    statusCode: 200,
                    message: 'Product founded...',
                    userdata: product_details
                }
                res.status(200).send(response)
            }
            else {
                var response = {
                    status: false,
                    statusCode: 400,
                    message: 'Product not founded...'
                }
                res.status(400).send(response)
            }
        } catch (error) {
            res.status(500).send('server crashed.')
        }
    },
    one_product_controller: async (req, res) => {
        try {
            const product_id = req.params.product_id;
            const product_detail = await product_Schema.findOne({ _id: product_id }).populate();
            if (product_detail) {
                const response = {
                    status: true,
                    stautsCode: 200,
                    userdata: product_detail
                }
                res.status(200).send(response);
            }
            else {
                const response = {
                    status: false,
                    stautsCode: 400,
                    message: 'user not exist.'
                }
                res.status(400).send(response)
            }
        } catch (error) {
            res.status(500).send('sever crashed.')
        }
    },
    update_product_controller: async (req, res) => {
        try {
            const product_id = req.params.product_id;

            const update = await product_Schema.findOneAndUpdate({ _id: product_id }, req.body, {
                new: true
            })
            // console.log('update', update)
            // update.tags.push('one'),
            //     await update.save();

            // update.image.imgId = "imgid"
            // await update.save();

            const response = {
                status: true,
                stautsCode: 200,
                userdata: update,
                message: 'Product details updated successfully.'
            }
            res.status(200).send(response)

            let user;
            // user = await product_Schema.findOneAndUpdate({ user_id, "all_products._id": product_id }, req.body, {
            //     new: true
            // })


        } catch (error) {
            res.status(500).send(error)
        }
    },
    delete_product_controller: async (req, res) => {
        try {
            const shop_id = req.params.shop_id;
            const product_id = req.params.product_id;

            await product_Schema.findOneAndDelete({ $and: [{ shop_id, product_id }] });

            const response = {
                status: true,
                stautsCode: 200,
                message: 'Shop details deleted successfully.'
            }
            res.status(200).send(response)

            // const delete_user = await product_Schema.findOneAndUpdate({ user_id }, {
            //     $pull: {
            //         all_products: { _id: product_id }
            //     }
            // });
            // if (delete_user) {
            //     const response = {
            //         status: true,
            //         stautsCode: 200,
            //         message: 'Shop details deleted successfully.'
            //     }
            //     res.status(200).send(response)
            // }
            // else {
            //     const response = {
            //         status: false,
            //         stautsCode: 400,
            //         message: 'user not exist.'
            //     }
            //     res.status(400).send(response)
            // }

        } catch (error) {
            res.status(500).send('server crashed.')
        }

    },

    image_controller: async (req, res) => {
        try {

            console.log('hhhhhhhh///')

            const product = await product_Schema.findOne({ _id: req.params.productId });
            console.log(product)
            console.log(req.file)
            product.image.imgId = req.file.filename;
            product.image.url = `D:/quick-pick final/Quick-Pick/upload/images/${req.file.filename}`

            await product.save();

            const response = {
                status: true,
                statusCode: 200,
                message: 'successfully uploded',
                product: product
            }

            res.status(200).send(response);

        } catch (error) {
            console.log(error)
            res.status(500).send('error');
        }
    },

    remove_image: (req, res) => {
        const path = ''
        fs.unlink(path, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    }

}