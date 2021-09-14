const {Comments}  =  require("../../models/comments");

module.exports = async (req, res) => {
    await Comments.findById(req.params.commentboxid,(err, comments)=>{
        if (err) {
            return res.status(404).json({
                success: false,
                message: 'Something went Wrong!'
            });
        }
        else{
            return res.status(200).json({
                commentBox:comments
            });
        }
    });
};