const {User} = require("../../models/user");

module.exports = (req,res)=>{
    var u_id = req.params.id
    User.findOne({'_id': mongoose.Types.ObjectId(u_id)}, (err, user) => {
        if (!user) {
            console.log(err);
            return res.status(404).json({
                success: false,
                message: 'User not found!'
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