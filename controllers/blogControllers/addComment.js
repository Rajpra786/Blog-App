const {Blog} = require("../../models/blog");

module.exports = async(req, res) => {
    const comment = {
        ...req.body,
        name:req.user.name,
        author:req.user._id,
        avatar:req.user.avatar
    }
    Blog.findByIdAndUpdate(req.params.id,
        {"$push":{"comments":comment}},
        (err) => {
            if (err) {
                return res.status(404).json({
                    success: false,
                    message: 'blog not found!'
                });
            } else {
                return res.status(200).json({
                    success: true,
                    message: 'Successfully Added'
                })
            }
    });
}