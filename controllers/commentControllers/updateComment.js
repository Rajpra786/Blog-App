const {Comments} = require("../../models/comments"); 
/*
    this requires to add a user auth that same user only can edit
*/
module.exports = async(req, res) => {
    await Comments.findOneAndUpdate(
        {"_id":req.params.commentboxid, "comments._id":req.params.commentid},
        {
            "$set":{
                "comments.$.message":req.body.message
            }
        },
        (err) =>{
            if(err)
            {
                return res.status(400).json({
                    success:false,
                    message:'Something Went Wrong'
                })
            }
            else{
                return res.status(200).json({
                    success: true,
                    message: 'Successfully updated'
                })
            }
        }
    )


    // await Blog.findById(req.params.id, (err, blog) => {
    //     if (!blog) {
    //         return res.status(404).json({
    //             success: false,
    //             message: 'blog not found!'
    //         });
    //     } else {

    //         for(var index in blog.comments)
    //         {
    //             if(req.params.commentid == blog.comments[index]._id)
    //             {
    //                 if(req.user._id.toString() == blog.comments[index].author.toString())
    //                     blog.comments[index].message = req.body.message;
    //                 else{
    //                     return res.status(403).json({
    //                         success:false,
    //                         message:'Not authorized to edit this comment!'
    //                     })
    //                 }
    //                 break;

    //             }
    //         }
            
    //         blog.save().then(()=>{
    //             return res.status(200).json({
    //                 success: true,
    //                 message: 'Successfully updated'
    //             })
    //         })
    //         .catch((er=>{
    //             console.log(er);
    //             return res.status(400).json({
    //                 success:false,
    //                 message:'Something Went Wrong'
    //             })
    //         }))
    //     }
    // });
}
