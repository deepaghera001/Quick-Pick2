const register_schema = require('../../model/shopDetails/register_schema')
const product_schema = require('../../model/shopDetails/product_schema')
const bcrypt = require('bcrypt')

module.exports = {

    register_controller: async (req, res) => {
        try {
            const {
                name,
                email,
                password,
                phone_number,
                shop_name,
                address,
                area,
                city,
                pincode,
                start_time,
                end_time
            } = req.body;

            const checkEmail = await register_schema.findOne({ email });
            if (checkEmail)
                return res.status(200).json({
                    message: 'Email is already exist.'
                })

            const hash_password = await bcrypt.hash(password, 10);

            const user = new register_schema({
                name,
                email,
                password: hash_password,
                phone_number,
                shop_name,
                address,
                area,
                city,
                pincode,
                start_time,
                end_time
            })

            const savedUser = await user.save();
            var response = {
                status: true,
                statusCode: 200,
                message: 'Shop detail registration successfull',
                userdata: savedUser
            }
            res.status(200).send(response)


        } catch (error) {
            console.log('error', error)
            res.status(500).json(error)
        }
    },
    login_shop_controller: async (req, res) => {
        try {
            const { email, password } = req.body;

            const shop = await register_schema.findOne({ email });
            if (shop) {
                const hased_password = await bcrypt.compare(password, shop.password);
                if (hased_password) {
                    res.status(200).json({
                        message: 'user login successfull',
                        userData: shop
                    })
                } else {
                    res.status(400).json({
                        message: 'wrong credencial'
                    })
                }
            } else {
                res.status(400).json({
                    message: 'please register first'
                })
            }

        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            })
        }

    },

    all_users_controller: async (req, res) => {
        try {
            const registerDetails = await register_schema.find({});
            if (registerDetails) {
                var response = {
                    status: true,
                    statusCode: 200,
                    message: 'All user details',
                    userdata: registerDetails
                }
                res.status(200).send(response)
            }
            else {
                var response = {
                    status: false,
                    statusCode: 400,
                    message: 'Userdata not founded...'
                }
                res.status(400).send(response)
            }
        } catch (error) {
            res.status(500).send('server crashed.')
        }
    },

    one_user_controller: async (req, res) => {
        try {
            const _id = req.params.id;
            console.log(_id)
            const user = await register_schema.findOne({ _id });
            if (user) {
                var response = {
                    status: true,
                    stautsCode: 200,
                    message: 'User exist',
                    userdata: user
                }
                res.status(200).send(response);
            }
            else {
                var response = {
                    status: false,
                    statusCode: 400,
                    message: 'Userdata not exist'
                }
                res.status(400).send(response)
            }
        } catch (error) {
            res.status(500).send('sever crashed.')
        }
    },

    update_user_controller: async (req, res) => {
        try {
            const _id = req.params.id;
            const user = await register_schema.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            if (user) {
                var response = {
                    status: true,
                    statusCode: 200,
                    message: 'Updated successfully.',
                    userdata: user
                }
                res.status(200).send(response)
            }
            else {
                var response = {
                    status: false,
                    statusCode: 400,
                    message: 'Userdata not updated'
                }
                res.status(400).send(response)
            }

        } catch (error) {
            res.status(500).send('server crashed.')
        }
    },

    delete_user_controller: async (req, res) => {
        try {
            const _id = req.params.id;
            const delete_user = await register_schema.findByIdAndDelete({ _id });
            if (delete_user) {
                var response = {
                    status: true,
                    statusCode: 200,
                    message: 'User deleted successfully.',
                    userdata: delete_user
                }
                res.status(200).send(response)
            }
            else {
                var response = {
                    status: false,
                    statusCode: 400,
                    message: 'Userdata not deleted.'
                }
                res.status(400).send(response)
            }

        } catch (error) {
            res.status(500).send('server crashed.')
        }

    }
}