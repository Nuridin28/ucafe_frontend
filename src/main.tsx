import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { cartStore } from "./app/cartStore.ts";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={cartStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
