const {User} = require("../../models/user");

module.exports = (req,res)=>{
    User.findById(req.params.id, (err, user) => {
        if (!user) {
            return res.status(404).json({
                success: false,
                message: err.message
            });
        } else {
            return res.status(200).send({
                name:user.name,
                description:user.description,
                avatar:user.avatar,
                userId: user._id,
            })
        }
    });
}