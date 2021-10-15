const { User } = require("../../models/user");

/*
	Aim: Used to return user profile
*/

module.exports = (req, res) => {
	User.findById(req.params.id, (err, user) => {
		if (!user) {
			return res.status(404).json({
				success: false,
				message: err.message,
			});
		} else {
			console.log(user);
			const data = {
				name: user.name,
				description: user.description,
				avatar: user.avatar,
				userId: user._id,
				github: user.github,
				twitter: user.twitter,
				website: user.website,
			};
			console.log(data);
			return res.status(200).send(data);
		}
	});
};
