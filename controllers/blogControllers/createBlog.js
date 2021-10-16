require("dotenv").config(); // include configurations

module.exports = async (req, res) => {
	/*
		#swagger.tags = ['Blog']
		#swagger.summary = 'Create new blog'
        #swagger.description = 'Endpoint to create a new blog'
		#swagger.parameters['Body'] = {
            in: 'body',
            description: 'Details for the blog',
            required: true,
            schema: { 
						$ref: '#/definitions/Blog' 
                    }
        } 
		#swagger.security = [{
               "apiKeyAuth": []
        }]
	*/
	const { Blog } = require("../../models/blog");
	const { Comments } = require("../../models/comments");

	const blog = new Blog({
		author: req.session.userId,
		name: req.user.name,
		avatar: req.user.avatar,
		...req.body,
	});

	const comment = new Comments();
	comment.save((err, cmt) => {
		//create a comment section
		if (err) {
			console.log(err.message);
			console.log("Unable to create comment section");
			return res.status(422).json({
				errors: err,
			});
		} else {
			blog.comments = cmt._id;

			blog.save((err, doc) => {
				if (err) {
					return res.status(422).json({
						errors: err,
					});
				} else {
					req.user.blogs.push(blog._id);
					req.user.save();
					return res.status(200).json({
						success: true,
						message: "Successfully Created",
						blogId: blog._id,
					});
				}
			});
		}
	});
};
