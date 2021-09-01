const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const findByToken = require('./helpers/findByToken');
const generateToken = require('./helpers/generateToken');
const encrypt = require('./helpers/encrypt');
const comparePassword = require('./helpers/comparePassword');

const SALT = 10;
require("dotenv").config();

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required!'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'Email is required!'],
        trim:true,
        unique:1,
        maxlength:100
    },
    password:{
        type:String,
        required:[true,'Password is required!'],
        minlength:5
    },
    description:{
        type:String
    },
    avatar:{
        type:String
    },
    blogs:[
        { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }
    ],
    posts:[
        { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
    ],
    token:{
        type:String
    }
},
{
    timestamps: true
});

//Encrypt password, before saving
userSchema.pre('save', encrypt);

//compare password with encrypted
userSchema.methods.comparePassword = comparePassword;

//for generating token when loggedin
userSchema.methods.generateToken = generateToken;

//validating token for auth routes middleware
userSchema.statics.findByToken = findByToken;

const User = mongoose.model('User', userSchema);
module.exports = { User }