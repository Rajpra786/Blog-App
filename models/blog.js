const mongoose = require('mongoose');
require("dotenv").config();

const commentSchema = mongoose.Schema(
    {
        author:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
            required:[true,"Unknown user!"]
        },
        name:{
            type:String
        },
        avatar:{
            type:String
        },
        message:{
            type:String,
            maxlength:200
        }
    },
    {
        timestamps: true
    }
);

const blogSchema = mongoose.Schema(
    {
        author:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
            required:[true,"Unknown user!"]
        },
        name:{
            type:String
        },
        avatar:{
            type:String
        },
        title:{
            type:String,
            required:[true,"Title can not be empty!"],
            maxlength:100
        },
        content:{
            type:mongoose.Schema.Types.Mixed,
            maxlength:5000,
            required: [true, "Blog can not be empty"]
        },
        description:{
            type:String, 
            maxlength:300
        },
        image:{
            location:{type:String},
            key: {type:String},
            originalname:{type:String}
        },
        comments:[
            {
                type:commentSchema
            }
        ],
        tags:[
            {
                type:String
            }
        ]

    },
    {
        timestamps: true
    }
)

const Blog = mongoose.model('Blog', blogSchema);
module.exports = { Blog }