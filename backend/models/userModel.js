const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        requried: [true, 'Please add name']
    },
    email: {
        type: String,
        requried: [true, 'Please add email'],
        unique: true
    },
    password: {
        type: String,
        requried: [true, 'Please add a password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)