module.exports = (req,res)=>{
    console.log("Implement update function");
    return res.status(200).send({
        email:user.email,
        name:user.name,
        description:user.description,
        avatar:user.avatar,
        userId: user._id,
    })
}