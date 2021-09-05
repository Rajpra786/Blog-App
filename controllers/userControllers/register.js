const {User} = require("../../models/user");

module.exports = async (req, res) => {
    const user = new User(req.body);

    await user.save((err, usr) => {
        if(usr){
            const userData = {
                name: usr.name,
                email:usr.email
            }
            res.status(200).json({
                success: true,
                message: 'Successfully registerd In!'
            });
        }
        else{
            return res.status(409).json({
                errors: err,
                msg:"Something went wrong!"
            })
        }
    });
}