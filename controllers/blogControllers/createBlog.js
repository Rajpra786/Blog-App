const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
require('dotenv').config();   // include configurations 

const s3 = new aws.S3({
    accessKeyId:process.env.S3_ACCESS_KEY,
    secretAccessKey:process.env.S3_SECRET_KEY,
    region:process.env.S3_REGION 
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error(message="Only filetype jpeg and png are supported"), false);
    }
};

const storage = multerS3({
    s3:s3, 
    bucket:"mysimpleblog",
    key: function(req,file,cb){
        cb(null,new Date().toISOString()+ file.originalname);
    }
})

const uploadFile = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 2   //max 2mb
    },
    fileFilter: fileFilter
});

module.exports = async (req, res) => {
    const {Blog}     = require("../../models/blog");
    const {Comments} = require("../../models/comments"); 
    const uploadSingle = uploadFile.single("blog-image");

    uploadSingle(req,res,(err)=>{
        if(err){
            console.log(err);
            return res.status(400).json({
                success:false,
                error: err.message
            }) 
        }

        const blog = new Blog({
            author:req.session.userId,
            name: req.user.name, 
            avatar:req.user.avatar, 
            ...req.body
        });

        const comment = new Comments();
        comment.save((err,cmt) =>{   //create a comment section
            if(err){
                console.log(err.message);
                console.log("Unable to create comment section");
                return res.status(422).json({
                    errors:err
                })
            }   
            else{
                blog.comments = cmt._id;
                if(req.file)
                {
                    blog.image = {
                        location:req.file.location,
                        key: req.file.key,
                        originalname:req.file.originalname
                    }
                }

                blog.save((err, doc) => {
                    if (err) {
                        return res.status(422).json({
                            errors: err
                        })
                    } else {
                        req.user.blogs.push(blog._id);
                        req.user.save();
                        return res.status(200).json({
                            success: true,
                            message: 'Successfully Created'
                        })
                    }
                });
            } 
        })
    });
}
