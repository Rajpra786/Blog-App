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

const commentsSchema = mongoose.Schema(
    {
        comments:[
            {
                type:commentSchema
            }
        ]
    }
);

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = { Comments }