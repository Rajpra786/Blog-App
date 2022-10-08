const { User } = require('../models/user');
require("dotenv").config();

module.exports = (req, res, next) => {
    //parse the token
    // let token = req.headers.cookies.replace("authToken=","").replace("%22","").replace("%22",""); 

    User.findById(req.session.userId, (err, user) => {
        if (err) throw err;
        req.user = user;
        next();
    });
}