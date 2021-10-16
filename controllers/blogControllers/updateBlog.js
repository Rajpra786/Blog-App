module.exports = async (req, res) => {
	/*
		#swagger.tags = ['Blog']
		#swagger.summary = 'Update Blog by Id'
        #swagger.description = 'Endpoint to update a specific blog using id'
		
		#swagger.parameters['Values'] = {
            in: 'body',
            description: 'Updated Values',
            schema: { 
						$ref:'#/definitions/Blog' 
                    }
        }
	*/
	const { Blog } = require("../../models/blog");

	await Blog.findById(req.params.id, (err, blog) => {
		if (err) {
			return res.status(404).json({
				success: false,
				message: err.message,
			});
		} else {
			if (req.user._id.toString() != blog.author.toString()) {
				return res.status(403).json({
					success: false,
					message: "Not authorized to edit this blog!",
				});
			}

			blog.readTime = Math.round(req.body.content.split(" ").length / 200) + 1;

			if (req.body.image) blog.image = req.body.image;

			if (req.body.title) blog.title = req.body.title;

			if (req.body.description) blog.description = req.body.description;

			if (req.body.content) {
				blog.content = req.body.content;
			}

			if (req.body.tags) {
				blog.tags = req.body.tags;
			}

			blog
				.save()
				.then((response) => {
					return res.status(200).json({
						success: true,
						message: "Updated successfully",
					});
				})
				.catch((err) => {
					console.log(err);
					return res.status(404).json({
						success: false,
						message: "Something went wrong",
					});
				});
		}
	});
};
