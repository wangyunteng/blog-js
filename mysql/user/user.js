const {Sequelize,sequelize} = require("../index")
const User = sequelize.define("user", {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
async function create () {
  await User.sync();
  console.log("用户模型表创建");
}
create()
module.exports = User
