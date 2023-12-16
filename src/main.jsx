import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reduxstore } from "./store/index.js";
// define router
const routers = createBrowserRouter([{ path: "/", element: <Home /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={reduxstore}>
      <RouterProvider router={routers}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
