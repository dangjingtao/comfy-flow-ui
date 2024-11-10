import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
