
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
    phone: joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must be valid 10 digit.`}).required(),
    experience: joi.number().required(),
    achievements: joi.string().required()
});

route.post('/', validator.body(bodySchema), async (req, res)=> {
    let registerUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        introduction: req.body.introduction,
        phone: req.body.phone,
        experience: req.body.experience,
        achievements: req.body.achievements
    });

    await registerUser.save((err, doc)=> {
        if (err) return res.status(203).json({ message: err.message })
        else {
            return res.status(200).json({ message: 'Success', data: doc });
        }
    });

});

module.exports = route;
