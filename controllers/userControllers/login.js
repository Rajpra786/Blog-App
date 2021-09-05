const {User} = require("../../models/user");
const bcrypt = require('bcrypt');

module.exports= (req, res) => {
    const {email, password} = req.body;

    User.findOne({'email': email}, (err, user) => {
        if(user){
            bcrypt.compare(password, user.password, function (err, same){
                if(same){
                    req.session.userId = user._id; 
                    return res.status(200).json({
                        success: true,
                        message: 'Successfully Logged In!',
                    })
                }
                else{
                    return res.status(404).json({
                        success: false,
                        message: 'Wrong Password'
                    });
                }
            });
        }
        else{
            return res.status(404).json({
                success: false,
                message: 'Email is not registerd with our system!'
            });
        }
    });
}