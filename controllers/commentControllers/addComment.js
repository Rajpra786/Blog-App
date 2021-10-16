const { Comments } = require("../../models/comments");

module.exports = async (req, res) => {
	/*
		#swagger.tags = ['Comments']
		#swagger.summary = 'Add Comment'
        #swagger.description = 'Endpoint to create new comment'
        

        #swagger.parameters['Comment'] = {
            in: 'body',
            description: 'Comment Message',
            required: true,
            schema: { 
                        $message: 'Something about blog'
                    }
        }
        
        #swagger.security = [{
               "apiKeyAuth": []
        }]
	*/
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
				return res.status(406).json({
					success: false,
					message: "Comments Not enabled for this blog!",
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
