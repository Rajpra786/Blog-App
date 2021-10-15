const { Comments } = require("../../models/comments");

module.exports = async (req, res) => {
	await Comments.findById(req.params.commentBoxId)
		.populate("author", "_id name avatar")
		.then((comments) => {
			return res.status(200).json({
				commentBox: comments,
			});
		})
		.catch((err) => {
			console.log(err);
			return res.status(404).json({
				success: false,
				message: "Something went Wrong!",
			});
		});
};
