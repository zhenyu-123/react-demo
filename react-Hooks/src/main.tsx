import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  //   严格模式会console俩次
  <StrictMode>
    <App />
  </StrictMode>
);
