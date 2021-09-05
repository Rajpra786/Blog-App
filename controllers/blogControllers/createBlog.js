const Blog = require("../../models/blog");

module.exports = async (req, res) => {
    const blog = new Blog(req.body);
    
    await blog.save((err, doc) => {
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
