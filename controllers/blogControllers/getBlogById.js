const { Blog } = require("../../models/blog");

module.exports = async (req, res) => {
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
