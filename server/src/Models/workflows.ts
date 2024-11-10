import { DataTypes } from "sequelize";

module.exports = {
  tableName: "Flows",
  clearForce: true,
  columns: {
    // 模型属性
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flow: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // 其他字段...
  },
  initData: [
    {
      name: "base1.5",
      flow: "[]",
    },
  ],
};
