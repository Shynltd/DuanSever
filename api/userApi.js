var user = require('../model/user');
module.exports.checkLogin = async (req, res) => {
    var email = req.body.email;
    var userId = await user.findOne({userName: email});
    if (userId) {
        var password = req.body.password;
        if (userId.passWord == password) {
            res.json({status:'Success'});
        } else {

            res.json({status:'Fail'});
        }
    } else {
        res.json({status:'Fail'});
    }
}
