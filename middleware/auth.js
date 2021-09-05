const { User } = require('../models/user');
require("dotenv").config();

module.exports =  (req, res, next) => {
    //parse the token
    // let token = req.headers.cookies.replace("authToken=","").replace("%22","").replace("%22",""); 

    User.findById(req.session.userId, (err, user) => {
        if (err) throw err;
        if (!user) return res.status(401).json({ isAuth: false, error: true })        
        req.user = user;
        next();
    });
}

// const User = require('../models/User')
// module.exports = (req, res, next) => {
// User.findById(req.session.userId, (error, user ) =>{
// if(error || !user )
// return res.redirect('/')
// next()
// })
// }