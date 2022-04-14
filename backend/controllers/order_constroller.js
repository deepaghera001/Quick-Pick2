const order_schema = require('../model/order_schema')
const customer_schema = require('../model/customer_schema')

const nodemailer = require('nodemailer');


function data(toEmail, toName, secureCode) {
    const htmldata = `
    <div>
        <p>Hello Mr/Mis ${toName}<p>
        <p>Your seceret code is ${secureCode}</p>
    </div>
        `
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: 'mail.btcbabil.com',
        // port: 587,
        // secure: false,
        auth: {
            user: 'smiteshmaniya6@gmail.com',
            pass: '',
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: `${process.env.COMPANYNAME} <${toEmail}>`,
        to: toEmail,
        subject: 'Activation Account',
        text: `${process.env.COMPANYNAME}: Activation Account `,
        html: htmldata
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    order_controller: async (req, res) => {
        try {

            const custId = req.id;
            const {
                shopId,
                product_details,
                amount,
                // payment_method
            } = req.body

            const secure_code = Math.floor((Math.random() * 10000) + 999);

            const order = new order_schema({
                custId,
                shopId,
                product_details,
                amount,
                // payment_method,
                secure_code
            });

            const saved_order = await order.save();

            const response = {
                status: true,
                statusCode: 200,
                message: 'Order is successully done.',
                // userdata: saved_order
            }

            const customer = await customer_schema.findById({ _id: custId });
            data(customer.email, customer.name, secure_code)

            res.status(200).send(response)

        } catch (error) {
            res.status(500).send(error);
        }
    },

    get_order_of_customer: async (req, res) => {
        try {
            const orders = await order_schema.find({ c_id: req.params.customerId });
            const response = {
                status: true,
                statusCode: 200,
                message: 'All Orders of customer',
                userdata: orders
            }
            res.status(200).send(response)
        } catch (error) {
            res.status(500).send('error');
        }
    },

    get_order_of_shop: async (req, res) => {
        try {
            const orders = await order_schema.find({ c_id: req.params.shopId });
            const response = {
                status: true,
                statusCode: 200,
                message: 'All Orders of shop',
                userdata: orders
            }
            res.status(200).send(response)
        } catch (error) {
            res.status(500).send('error');
        }
    }

}