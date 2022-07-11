let User = require('../models/users');
const express = require('express');
const UserRoute = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
UserRoute.route('/create-user').post((req, res, next) => {
    const userRegister = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 12),
        cpassword: bcrypt.hashSync(req.body.cpassword, 12),
        gender: req.body.gender,
        picture: req.body.picture
    })
    userRegister.save(err => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                title: 'Error',
                error: 'Email in used'
            })
        }
        return res.status(200).json({
            title: 'Singup Success'
        })
    })
})

UserRoute.route('/login-user').post((req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).json({
            title: 'Server Error',
            error: err
        })
        //อีเมลไม่ถูกต้อง
        if (!user) {
            return res.status(401).json({
                title: 'อีเมลไม่ถูกต้อง',
                error: 'Invalid Credentails'
            })
        }
        //รหัสไม่ถูกต้อง
        if(!bcrypt.compare(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'รหัสผ่านไม่ถูกต้อง',
                error: 'Invalid Credentails'
            })
        }

        let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET,
            {expiresIn : process.env.JWT_EXPIRES_IN} )
        return res.status(200).json({
            title: 'login sucess',
            token: token
        })
    })
})

module.exports = UserRoute