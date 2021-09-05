import { findOne } from "../../models/blog";

module.exports = (req, res) => {
    await findOne({'_id': mongoose.Types.ObjectId(req.body.data.id)}, (err, blog) => {
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'blog not found!'
            });
        } else {
            for(var i in blog.comments)
            {
                if(req.body.data.commentId == blog.comments[i]._id)
                {
                    blog.comments[i].description = req.body.data.description;
                }
            }
            
            blog.save().then(()=>{
                return res.status(200).json({
                    success: true,
                    message: 'Successfully Added'
                })
            })
            .catch((er=>{
                console.log(er);
                return res.status(400).json({
                    success:false,
                    message:'Something Went Wrong'
                })
            }))
        }
    });
}
