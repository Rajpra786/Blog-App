const { Blog } = require("../../models/blog");

module.exports = async (req, res) => {
	/*
		#swagger.tags = ['Blog']
		#swagger.summary = 'Get Blog By Id'
        #swagger.description = 'Endpoint get a blog by Id'
		 
		#swagger.security = [{
               "apiKeyAuth": []
        }]
	*/
	await Blog.findById(req.params.id, (err, blog) => {
		if (err) {
			return res.status(404).json({
				success: false,
				message: "blog not found!",
			});
		} else {
			return res.status(200).json({
				success: true,
				message: "Request completed",
				data: blog,
			});
		}
	});
};
