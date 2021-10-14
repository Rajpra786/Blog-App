const bcrypt = require("bcrypt");
const SALT = 10;
module.exports = function (next) {
	var user = this;

	if (user.isModified("password")) {
		//if password is changed
		bcrypt.genSalt(SALT, function (err, salt) {
			if (err) return next(err);

			bcrypt.hash(user.password, salt, function (err, hash) {
				if (err) return next(err);
				user.password = hash;
				next();
			});
		});
	} else {
		next();
	}
};
