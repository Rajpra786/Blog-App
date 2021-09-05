const Blog  =  require("../../models/blog");

module.exports = async(req, res) => {
    var b_id = req.params.id;
    await Blog.findOne({'_id': mongoose.Types.ObjectId(b_id)}, (err, blog) => {
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'blog not found!'
            });
        } else {
            return res.status(200).json({
                success: true,
                message: 'Successfully Send',
                data:{blog}
            })
        }
    });
}