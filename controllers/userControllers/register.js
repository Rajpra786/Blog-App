const { User } = require("../../models/user");

module.exports = async (req, res) => {
	/* 	
        #swagger.tags = ['User']
		#swagger.summary = 'SignUp'
        #swagger.description = 'Endpoint to register a new user'
        #swagger.parameters['User Details'] = {
            in: 'body',
            description: 'User Name Email and Password',
            required: true,
            schema: { 
                    $name:'Keshanta Prajapat',
                    $email: 'kesh@gmail.com',
                    $password:'12345678'
                    }
        } 
    */
	const user = new User(req.body);

	await user.save((err, usr) => {
		if (usr) {
			const userData = {
				name: usr.name,
				email: usr.email,
			};
			res.status(200).json({
				success: true,
				message: "Successfully registerd In!",
			});
		} else {
			console.log(err);
			return res.status(409).json({
				errors: err,
				msg: "Something went wrong!",
			});
		}
	});
};
