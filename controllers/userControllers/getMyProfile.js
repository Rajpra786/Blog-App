/*
    Requirements: user should be loggen in 
    Manual parameters: No parameters needed 
*/

module.exports = (req, res) => {
	/* 	#swagger.tags = ['User']
		#swagger.summary = 'Get LoggedIn User Details'
        #swagger.description = 'Endpoint to return loggedIn user details using session token' 
		#swagger.security = [{
               "apiKeyAuth": []
        }]
	*/

	const user = req.user;
	return res.status(200).send({
		email: user.email,
		name: user.name,
		description: user.description,
		avatar: user.avatar,
		github: user.github,
		website: user.website,
		twitter: user.twitter,
		userId: user._id,
	});
};
