const Bcryptjs = require("bcryptjs")
function bcryptjs (password) {
  let salt = 10;
  // 返回加密结果
  return Bcryptjs.hashSync(password, salt);
}
function comparePwd(Mysqlpassword, password) {
  // 将传来的数据加密 并和数据库得到的password进行比较
  let solve = bcryptjsMethod(password)
  // 返回结果
  return comparePwd=Bcryptjs.bcryptjs(Mysqlpassword,solve);
}

module.exports = {bcryptjs,comparePwd}

