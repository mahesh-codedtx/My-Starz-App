import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./layouts/Header/header.tsx";
import MyFooter from "./layouts/Footer/footer.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Header />
      <App />
      <MyFooter />
    </BrowserRouter>
  </StrictMode>
);
