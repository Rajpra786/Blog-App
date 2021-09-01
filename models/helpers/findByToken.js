module.exports = function (token, callBack) {
    var user = this;
    jwt.verify(token, process.env.KEY, function (err, decode) {
        user.findOne({ "_id": decode, "token": token }, function (err, user) {
            if (err) return callBack(err);
            callBack(null, user);
        });
    });
};