
const mongoose = require('mongoose');
const schema = mongoose.Schema;


let userShema = new schema({
    firstName: {
        type: String,
        // minlength: [3, "Name is too short"],
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    introduction: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    achievements: {
        type: String,
        required: true
    }
}, { collection: 'userlists' })



let user = mongoose.model('User', userShema);
module.exports = user;