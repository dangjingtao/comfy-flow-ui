import express from "express";
import dbUtils from "./lib/dbUtils/index";
import cors from "cors";
import responseHandler from "./lib/responseHandler";

// 初始化Express应用
const app = express();
const port = 8008;

// 中间件用于解析JSON请求体
app.use(express.json());

app.use(
  cors({
    origin: "*", // 允许来自example.com的跨域请求
    methods: "GET,POST,PUT,DELETE", // 允许的HTTP方法
    allowedHeaders: "Content-Type,Authorization", // 允许的HTTP头
    credentials: true, // 是否允许发送Cookie
    optionsSuccessStatus: 200, // 一些旧版浏览器不支持206
  })
);

async function startApp() {
  try {
    // 初始化数据库连接
    await dbUtils.connection2DB();

    app.post("/api/login", async (req, res) => {
      const { username, password } = req.body;

      const {
        models: { Users },
      } = dbUtils.sequelize;

      const user_result = await Users.findOne({
        where: {
          username,
          password,
        },
      });

      if (user_result) {
        res.json(responseHandler.success(user_result[0]));
        return responseHandler.success(user_result[0]);
        // return response.success(user_result[0]);
      } else {
        // console.log(response.error);
        res.json(
          responseHandler.error({ code: 401, message: "账号密码不匹配" })
        );
      }
    });

    // 定义路由和中间件
    app.get("/api/workflows", (req, res) => {
      // db.all("SELECT * FROM your_table", [], (err, rows) => {
      //   if (err) {
      //     res.status(500).json({ error: err.message });
      //   } else {
      //     res.json(rows);
      //   }
      // });
    });

    // 启动Express服务器
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

    // 优雅地关闭服务器和数据库连接
    process.on("SIGINT", async () => {
      console.log("Closing database connection and server");
      // await closeConnection(db);
      process.exit();
    });
  } catch (error) {
    console.error("Failed to start the application:", error);
  }
}

startApp();

// 示例路由：获取所有数据
// app.get('/api/data', (req: Request, res: Response) => {
//   db.all('SELECT * FROM your_table', [], (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.json(rows);
//   });
// });

// // 示例路由：创建新数据
// app.post('/api/data', (req: Request, res: Response) => {
//   const { /* some fields */ } = req.body;
//   const stmt = db.prepare('INSERT INTO your_table (/* columns */) VALUES (?)');
//   stmt.run({ /* values */ }, (err) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//       return;
//     }
//     res.status(201).json({ id: stmt.lastID });
//   });
//   stmt.finalize();
// });

// // 启动服务器
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
