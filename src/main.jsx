import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-xl bg-bgPrimary mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
