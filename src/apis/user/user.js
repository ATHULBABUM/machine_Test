
var express = require('express');
const route = express.Router();
const joi = require('joi');

const User = require("../../../models/user");

const validator = require('express-joi-validation').createValidator({})


route.get("/", async(req, res) => {
    try {
        let users = await User.find().select("firstName lastName email");

        return res.status(200).json({
            message: 'Success',
            data: users
        });
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
});
route.get("/:userId", async(req, res) => {
    try {
        let users = await User.findOne({ "_id": req.params.userId });

        return res.status(200).json({
            message: 'Success',
            data: users
        });
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
});

module.exports = route;
