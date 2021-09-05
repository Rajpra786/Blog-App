import { findOne } from "../../models/blog";

export default async(req, res) => {
    await findOne({'_id': mongoose.Types.ObjectId(req.body.b_id)}, (err, blog) => {
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'blog not found!'
            });
        } else {
            blog.comments.push(req.body.comment);
            blog.save();
            return res.status(200).json({
                success: true,
                message: 'Successfully Added'
            })
        }
    });
}