module.exports = (req, res) =>{
    req.session.destroy(() =>{
        return res.status(200).send({
            success: true,
            message: 'Successfully Logged Out!'
        });
    })
}