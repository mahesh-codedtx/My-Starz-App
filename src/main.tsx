import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./layouts/Header/header.tsx";
import MyFooter from "./layouts/Footer/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <MyFooter />
  </StrictMode>
);
