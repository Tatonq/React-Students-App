const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginPage = (req, res, next) => {
    res.status(200).json({
        title: 'กรุณาล็อกอินเข้าสู่ระบบ',
        message: '',
        loginStatus: false
    })
}

const postLogin = (req, res, next) => {
    if ()
}
UserRoute.route('/login-user').post((req, res, next) => {
    const email = { email: req.body.email }
    User.findOne(email, (err, user) => {
        try {
            return res.status(200).json({
                title: 'login sucess',
                message: '',
                class: "alert alert-primary",
                loginStatus: false
            })
        } catch (error) {
            
        }
    })
})