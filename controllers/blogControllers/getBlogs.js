const { Blog } = require("../../models/blog");

module.exports = async (req, res) => {
	var blogs = [];
	var filters = {};
	var query = {};
	if (req.query.maxcount) {
		filters.limit = Number(req.query.maxcount);
	}

	if (req.query.sort) {
		filters.sort = { updatedAt: "asc" };
	}

	if (req.query.tag) {
		query.tags = { $in: req.query.tag };
	}
	await Blog.find(
		query,
		"author readTime title description image tags updatedAt",
		filters
	)
		.populate("author", "_id name avatar description")
		.then((blogs) => {
			return res.status(200).json({
				blogs: blogs,
			});
		})
		.catch((err) => {
			return res.status(404).json({
				success: false,
				message: "Something went Wrong!",
			});
		});
};
