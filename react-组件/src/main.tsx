import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./components/Message/index.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 严格模式会将组件注册俩次，在生产环境不会生效 */}
    <App />
  </StrictMode>
);
