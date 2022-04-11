const customer_detail = require("../model/customer_schema");
const jwt = require("jsonwebtoken");

const AuthenticateCustomer = async ( req, res, next) => {
    try{
        next();
        const token = req.cookies.ct;
        const response = {
            status: true, 
            statusCode: 400,
            message: "You must need to login for access this page",
        }
        if(!token){
            req.status(400).json(response);
        }

        const id = jwt.verify(token, process.env.SECRET_KEY).id;
        const result = customer_detail.findOne({_id: id});
        if(!result){
            req.status(400).json(response);
        }
        console.log(result);
        req.id = result._id;
    }
    catch(err){
        console.log("Error while autheticating customer: " + err);
        res.status(500).json({
            message: "Server Error",
        })
    }
}

module.exports = AuthenticateCustomer;