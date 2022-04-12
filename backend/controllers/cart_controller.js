const cart_schema = require('../model/cart_schema')


module.exports = {
    add_to_cart: async (req, res) => {
        const custId = req.id; // this is taken from customer Authentication
        console.log(custId)
        const shopId = req.body.shopId;
        const productId = req.body.productId;
        const quantity = req.body.quantity;
        cart_schema.findOne({ custId, shopId }).then(async (cart) => {

            if (cart) {
                console.log('cart', cart)

                const found = await cart_schema.findOne({ $and: [{ custId, shopId, 'productIds.productId': productId }] })
                if (found) {
                    console.log('found', found)
                    const setVal = await cart_schema.findOneAndUpdate({ custId, shopId, 'productIds.productId': productId }, {
                        $set: {
                            "productIds.$.quantity": quantity
                        }
                    })

                    res.status(200).json({
                        message: 'product modified',
                        data: setVal
                    })
                }
                else {
                    console.log('pushed')
                    const setVal = await cart_schema.findOneAndUpdate({ custId, shopId }, {
                        $push: {
                            productIds: {
                                productId,
                                quantity
                            }
                        }
                    })
                    console.log(setVal)
                    res.status(200).json({
                        message: 'product added successfully.'
                    })
                }   

                // cart.productIds.map((val) => {
                //     console.log(val)
                //     if (val.productId == productId) {
                //         console.log('this is exist')
                //     }
                // })
            }
            else {

                const cart = new cart_schema({
                    custId,
                    shopId,
                    productIds: [
                        {
                            productId,
                            quantity
                        }
                    ]
                })
                await cart.save()
                res.status(200).json({
                    message: 'cart added successfully'
                })
            }
        }).catch(err => {
            res.status(500).send('error')
        })

    },
    get_cart: async (req, res) => {
        const cust_id = req.id;
        console.log("get req for cart ", cust_id)
        const result = await cart_schema.find({custId: cust_id})
            .populate('productIds.productId')
            .populate('shopId');
        const response = {
            status: true,
            statusCode: 200,
            message: "Data fetched",
            data: result
        }
        console.log(result);
        res.status(200).json(result);
    }
}