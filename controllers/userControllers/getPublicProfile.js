const { User } = require("../../models/user");

module.exports = (req, res) => {
	/* 	#swagger.tags = ['User']
		#swagger.summary = 'Get User Details By Id'
        #swagger.description = 'Endpoint to return specific user details using id' 
	*/
	User.findById(req.params.id, (err, user) => {
		if (!user) {
			return res.status(404).json({
				success: false,
				message: err.message,
			});
		} else {
			const data = {
				name: user.name,
				description: user.description,
				avatar: user.avatar,
				userId: user._id,
				github: user.github,
				twitter: user.twitter,
				website: user.website,
			};
			return res.status(200).send(data);
		}
	});
};
