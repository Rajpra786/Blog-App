const { Comments } = require("../../models/comments");
/*
    todo: This requires to add a user auth that same user only can edit
*/
module.exports = async (req, res) => {
	/* 	
		#swagger.tags = ['Comments']
		#swagger.summary = 'Update Comment By Id'
        #swagger.description = 'Endpoint to update specific comment in a comment box'
		#swagger.parameters['Message'] = {
            in: 'body',
            description: 'Comment Message which need to be updated',
            required: true,
            schema: { 
                        $message: 'Updated message'
                    }
        } 
		#swagger.security = [{
               "apiKeyAuth": []
        }]
	*/
	await Comments.findOneAndUpdate(
		{ _id: req.params.commentBoxId, "comments._id": req.params.commentId },
		{
			$set: {
				"comments.$.message": req.body.message,
			},
		},
		(err) => {
			if (err) {
				return res.status(404).json({
					success: false,
					message: "Comment Box or Comment Not Found!",
				});
			} else {
				return res.status(200).json({
					success: true,
					message: "Successfully updated!",
				});
			}
		}
	);
};
