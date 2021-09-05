const { User } = require('../models/user');
require("dotenv").config();

module.exports =  (req, res, next) => {
    //parse the token
    let token = req.headers.cookies.replace("authToken=","").replace("%22","").replace("%22",""); 

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.status(401).json({ isAuth: false, error: true })        
        req.token = token
        req.user = user;
        next();
    });
}
module.exports = { auth }