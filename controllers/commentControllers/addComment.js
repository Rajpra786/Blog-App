const { Comments } = require("../../models/comments");

module.exports = async (req, res) => {
	const comment = {
		message: req.body.message,
		name: req.user.name,
		author: req.user._id,
		avatar: req.user.avatar,
	};

	Comments.findByIdAndUpdate(
		req.params.commentBoxId,
		{ $push: { comments: comment } },
		(err) => {
			if (err) {
				return res.status(404).json({
					success: false,
					message: "Comment box not found!",
				});
			} else {
				return res.status(200).json({
					success: true,
					message: "Successfully Added",
				});
			}
		}
	);
};
