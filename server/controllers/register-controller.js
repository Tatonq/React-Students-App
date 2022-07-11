const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createUser = async userObj => {
    const hash = await bcrypt.hash(req.body.cpassword, 12);
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: bcrypt.hash(hash, 12),
        gender: req.body.gender,
        picture: req.body.picture
    });
    const success = `ลงทะเบียน ${req.body.fname} เรียบร้อยแล้ว`;
    return await user.save(err => {
        if (err) {
            return res.status(400).json({
                title: err,
                error: 'Username in used'
            })
        } else if (err) {
            return res.status(401).json({
                title: err,
                error: 'Email in used'
            })
        }
        return res.status(200).json({
            title: success
        })
    });
}

const register = (req, res, next) => {

}

UserRoute.route('/create-user').post((req, res, next) => {
    const hash = bcrypt.hash(req.body.cpassword, 12);
    const userRegister = new User({

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