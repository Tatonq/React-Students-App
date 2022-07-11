let User = require('../models/users');
const express = require('express');
const UserRoute = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

UserRoute.route('/create-user').post((req, res, next) => {
    const hashPassword = bcrypt.hash(req.body.password, 12);
    const hashPasswordConfirm = bcrypt.hash(req.body.cpassword, 12);
    const joinPassword = bcrypt.hash(hashPassword, 12);
    const joinPasswordConfirm = bcrypt.hash(hashPasswordConfirm, 12);
    const userRegister = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: joinPassword,
        cpassword: joinPasswordConfirm,
        gender: req.body.gender,
        picture: req.body.picture
    })
    userRegister.save(err => {
        if (err) {
            return res.status(400).json({
                title: 'error',
                error: 'Username in used'
            })
        } else if (err) {
            return res.status(401).json({
                title: 'error',
                error: 'Email in used'
            })
        }
        return res.status(200).json({
            title: 'Singup Success'
        })
    })
})

UserRoute.route('/login-user').post((req, res, next) => {
    User.findOne({ username: req.body.email }, (err, user) => {
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
            {expiresIn : JWT_EXPIRES_IN} )
        return res.status(200).json({
            title: 'login sucess',
            token: token
        })
    })
})