const jwt = require("jsonwebtoken")
class Jwt {
  constructor (data) {
    this.data = data
  }
  getToken() {
    let data = this.data;
    let cert = "wyt"; // 私钥
    let token = jwt.sign(data, cert, {expiresIn: '1s'})
    return token
  }
  verifyToken() {
    let token = this.data;
    let cert = "wyt"; // 公钥
    let res;
    jwt.verify(token, cert,(error,decoded) => {
      return error
    })
  }
}

module.exports = Jwt
