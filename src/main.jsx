import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router/Router.jsx";
import { Provider } from 'react-redux'
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
      <Provider store={store}>
  <StrictMode>
    <div className="max-w-screen-xl bg-bgPrimary mx-auto">
        <RouterProvider router={router} />
    </div>
  </StrictMode>
    </Provider>
);
