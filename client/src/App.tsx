import React from "react";
import { useRoutes } from "react-router-dom";
import { routers } from "./routes/index.tsx";
import "./styles/index.css"; // 如果你有CSS文件的话

// 根组件
const App: React.FC = () => {
  return (
    <div className="App">
      <>{useRoutes(routers)}</>
    </div>
  );
};

export default App;
