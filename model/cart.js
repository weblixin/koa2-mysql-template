const {sequelize, Sequelize} = require("../config");
const users = require("./user");

const cart = sequelize.define(
  'cart',  // 定义的表会自动加s，这里的表名为users
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    total: {
      type: Sequelize.INTEGER,
      default: 0,
      allowNull: false,
    },
    remark: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true  // 不自动生成时间
  }
);

// 外键
cart.belongsTo(users, {
  foreignKey: 'user_id'
});


// 导出数据模型model
module.exports = cart;