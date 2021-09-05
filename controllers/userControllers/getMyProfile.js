exports.getMyProfile = (req,res)=>{
    return res.status(200).send({
        email:user.email,
        name:user.name,
        description:user.description,
        avatar:user.avatar,
        userId: user._id,
    })
}