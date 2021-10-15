module.exports = async (req,res)=>{
    const {User} = require("../../models/user");

    await User.findById(req.params.id, (err,user) => {
        if (err) {
            return res.status(404).json({
                success: false,
                message: err.message
            });
        } else {
            
            if(req.user._id.toString() != req.params.id.toString())
            {
                return res.status(403).json({
                    success:false,
                    message:'Not authorized to edit this blog!'
                })
            }
            console.log(req.body);

            if(req.body.name) user.name = req.body.name; 
            
            if(req.body.email) user.email = req.body.email; 
            
            if(req.body.description) user.description = req.body.description;
            
            if(req.body.github) user.github = req.body.github; 

            if(req.body.website) user.website = req.body.website;

            if(req.body.twitter) user.twitter = req.body.twitter; 

            if(req.body.avatar) user.avatar = req.body.avatar; 

            user.save().then((response)=>{
                console.log(response);
                return res.status(200).json({
                    success: true,
                    message: "Updated successfully"
                })
            }).catch((err)=>{
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: 'Something went wrong'
                })
            });  
               
        }
    });
}