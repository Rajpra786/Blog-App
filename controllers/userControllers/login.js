const { User } = require("../../models/user");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {
	/* 	
        #swagger.tags = ['User']
		#swagger.summary = 'Start New User Session'
        #swagger.description = 'Endpoint to login a user'
        #swagger.parameters['User Login Details'] = {
            in: 'body',
            description: 'User Email and Password.',
            required: true,
            schema: { 
                    $email: 'hello@gmail.com',
                    $password:'12345678'
                    }
        } 
    */
	const { email, password } = req.body;
	User.findOne({ email: email }, (err, user) => {
		if (user) {
			bcrypt.compare(password, user.password, function (err, same) {
				if (same) {
					req.session.userId = user._id;
					req.session.time = Date.now();
					return res.status(200).json({
						success: true,
						message: "Successfully Logged In!",
						user: user,
					});
				} else {
					return res.status(404).json({
						success: false,
						message: "Wrong Password",
					});
				}
			});
		} else {
			return res.status(404).json({
				success: false,
				message: "Email is not registerd with our system!",
			});
		}
	});
};
