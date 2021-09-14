const mongoose = require('mongoose');
require("dotenv").config();

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
        comments_enabled:{
            type:Boolean, 
            default:true
        },
        comments:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Comments'
        },
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