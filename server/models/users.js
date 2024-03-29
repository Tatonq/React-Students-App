const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        require: true,
    },
    lname: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    phone:{
        type: String,
    },
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },
    gender: {
        type: Number,
        require: true
    },
    picture: {
        type: String,
    }
})

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User-Infomation", userSchema);