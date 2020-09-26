var user = require('../model/user')
module.exports.getLogin =  (req, res) => {
    res.render('login', { title: 'Express' });
}
module.exports.checkLogin = async (req, res) => {
var email = req.body.email;
var userId = await user.findOne({userName : email });
if (userId){
    var password = req.body.password;
    if (userId.passWord == password){
        res.send('Login thành công');
    } else {
        res.send('Sai mật khẩu. Vui lòng nhập lại');
    }
} else {
    res.send('Tài khoản không tồn tại');
}

}