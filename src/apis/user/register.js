
var express = require('express');
const route = express.Router();
const joi = require('joi');

const User = require("../../../models/user");

const validator = require('express-joi-validation').createValidator({})
const bodySchema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    introduction: joi.string().required(),
    phone: joi.number().required(),
    experience: joi.number().required(),
    achievements: joi.string().required()
});

route.post('/', validator.body(bodySchema), (req, res)=> {
    let promise1 = new Promise((resolve, reject)=> {
        let registerUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            introduction: req.body.introduction,
            phone: req.body.phone,
            experience: req.body.experience,
            achievements: req.body.achievements
        });
        let duplicateUser = User.find({email: req.body.email}, (err, data)=> {
            if(err) {
                reject(err);
            } else if (data && data.length) {
                return res.status(500).json({ message: "Duplicate data entered" });
            } else{
                resolve(registerUser)
            }
        });
    })
    promise1.then((val)=> {
        val.save((err, doc)=> {
            if (err) return res.status(203).json({ message: err.message })
            else {
                return res.status(200).json({ message: 'Success', data: doc });
            }
        });
    })

});

module.exports = route;
