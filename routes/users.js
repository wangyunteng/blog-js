var express = require('express');
var router = express.Router();
const User = require("../mysql/user/user");
const bcryptjs = require("../util/bcryptjs")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* post users 登录. */
router.post('/login', async function(req, res, next) {
  let {userName, passWord} = req.body;
  res.send(passWord)
});

/* post users 注册. */
router.post('/register', async function(req, res, next) {
  // let {userName, passWord} = req.body;
  let {userName, passWord} = req.body;
  bcryptjs.bcryptjs(passWord)
  res.send(bcryptjs.bcryptjs(passWord))
});

module.exports = router;
