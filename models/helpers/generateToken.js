module.exports = function (callBack) {
	var user = this;
	var token = jwt.sign(user._id.toHexString(), process.env.KEY);
	user.token = token;
	user.save(function (err, user) {
		if (err) return callBack(err);
		callBack(null, user);
	});
};
