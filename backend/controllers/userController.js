const jwt = require('jsonwebtoken') //Bringing in json web token
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    const {name,email,password} = req.body
    //Used if not all fields are inputed
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //Check if user exists
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists!')
    }
    //Hashing password (Using bcrypt)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //Creating User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,//status 401 Something was created
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
    //res.json({message: 'Register User'})
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'Login User'})
})

// @desc Register User
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async(req, res) => {
    res.json({message: 'User Data'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}