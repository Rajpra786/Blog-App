const { Comments } = require("../../models/comments");
/*
    todo: This requires to add a user auth that same user only can edit
*/
module.exports = async (req, res) => {
	await Comments.findOneAndUpdate(
		{ _id: req.params.commentBoxId, "comments._id": req.params.commentId },
		{
			$set: {
				"comments.$.message": req.body.message,
			},
		},
		(err) => {
			if (err) {
				return res.status(400).json({
					success: false,
					message: "Something Went Wrong",
				});
			} else {
				return res.status(200).json({
					success: true,
					message: "Successfully updated",
				});
			}
		}
	);
};
