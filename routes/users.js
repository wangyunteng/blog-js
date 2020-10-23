var express = require('express');
var router = express.Router();
const User = require("../mysql/user/user");
const bcryptjs = require("../util/bcryptjs")
// 生成token工具
const Jwt = require("../util/jwt")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* post users 登录. */
router.post('/login', async function(req, res, next) {
  let {userName, password} = req.body;
  if(userName&&password) {
    let mysqlPassword = await User.findOne({ where: {userName} });
    let ifLogin = await bcryptjs.comparePwd(mysqlPassword.dataValues.password, password);
    if(ifLogin) {
      // 生成token
      let token = new Jwt({userName,password})
      res.send({code:200, msg: "登录成功","token":token.getToken()})
    } else {
      res.send({code:400, msg: "账户或密码错误"})
    }
  } else res.send({code:400, msg: "账户或密码错误"})
});

/* post users 注册. */
router.post('/register', async function(req, res, next) {
  let {userName, password} = req.body;
  if(userName&&password) {
    let a = await User.create({userName,password: bcryptjs.bcryptjs(password)})
    console.log("注册成功")
    res.send({code:200, msg: "注册成功"})
  } else res.send({code:400, msg: "账户或密码为null"})
});

module.exports = router;
