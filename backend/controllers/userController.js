const jwt = require('jsonwebtoken') //Bringing in json web token
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler((req, res) => {
    const {name,email,password} = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    res.json({message: 'Register User'})
})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler((req, res) => {
    res.json({message: 'Login User'})
})

// @desc Register User
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler((req, res) => {
    res.json({message: 'User Data'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}