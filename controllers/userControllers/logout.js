module.exports = (req, res) => {
	/* 	
        #swagger.tags = ['User']
		#swagger.summary = 'LogOut'
        #swagger.description = 'Endpoint to delete a user session'
    */
	req.session.destroy(() => {
		return res.status(200).send({
			success: true,
			message: "Successfully Logged Out!",
		});
	});
};
