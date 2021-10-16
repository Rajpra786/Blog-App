module.exports = async (req, res) => {
	/* 	
        #swagger.tags = ['User']
		#swagger.summary = 'Update Profile'
        #swagger.description = 'Endpoint to update user details'
        #swagger.parameters['id'] = {
            in: 'path',
            description: 'User Id',
            required: true,
            schema: { 
                        $id:'6153433dde2e8001b35d123c'
                    }
        }

        #swagger.parameters['User Details'] = {
            in: 'body',
            description: 'User Details that need to be updated',
            required: true,
            schema: { 
                        $ref: '#/definitions/User'
                    }
        }
        
        #swagger.security = [{
               "apiKeyAuth": []
        }]
    */
	const { User } = require("../../models/user");

	await User.findById(req.params.id, (err, user) => {
		if (err) {
			return res.status(404).json({
				success: false,
				message: err.message,
			});
		} else {
			if (req.user._id.toString() != req.params.id.toString()) {
				return res.status(403).json({
					success: false,
					message: "Not authorized to edit this blog!",
				});
			}

			if (req.body.name) user.name = req.body.name;

			if (req.body.email) user.email = req.body.email;

			if (req.body.description) user.description = req.body.description;

			if (req.body.github) user.github = req.body.github;

			if (req.body.website) user.website = req.body.website;

			if (req.body.twitter) user.twitter = req.body.twitter;

			if (req.body.avatar) user.avatar = req.body.avatar;

			user
				.save()
				.then((response) => {
					console.log(response);
					return res.status(200).json({
						success: true,
						message: "Updated successfully",
					});
				})
				.catch((err) => {
					console.log(err);
					return res.status(500).json({
						success: false,
						message: "Something went wrong",
					});
				});
		}
	});
};
