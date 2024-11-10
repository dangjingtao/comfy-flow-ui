const { Sequelize } = require("sequelize");
const users = require("../../Models/users");
const workflows = require("../../Models/workflows");

const path = require("path");

// 创建Sequelize实例，连接到SQLite数据库
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../../db/database.sqlite"), // 指定SQLite数据库文件的路径
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

const initTable = async (modelConfig: any) => {
  const { tableName, columns, initData = [], clearForce = false } = modelConfig;
  const Model = sequelize.define(tableName, columns);
  await Model.sync({ force: clearForce });
  await Model.bulkCreate(initData);
};

const connection2DB = async () => {
  try {
    await sequelize.authenticate();
    await initTable(users);
    await initTable(workflows);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  sequelize,
  connection2DB,
};
