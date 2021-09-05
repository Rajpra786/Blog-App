/*
    Requirements: user should be loggen in 
    Manual parameters: No parameters needed 

*/

module.exports = (req,res)=>{
    const user = req.user;
    return res.status(200).send({
        email:user.email,
        name:user.name,
        description:user.description,
        avatar:user.avatar,
        userId: user._id,
    })
}