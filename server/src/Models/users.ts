import { DataTypes } from "sequelize";

module.exports = {
  tableName: "Users",
  clearForce: true,
  columns: {
    // 模型属性
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 其他字段...
  },
  initData: [
    {
      username: "1",
      password: "1",
      role: 1,
    },
    {
      username: "15017560655",
      password: "123456",
      role: 1,
    },
  ],
};
