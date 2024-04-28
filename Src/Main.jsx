import React from "react";
import ReactDOM from "react-dom/client";
import App_Header from "./components/app_header";
import App_Row from "./components/app_row";
import App_Aside from "./components/app_aside";
import App_Footer from "./components/app_footer";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App_Header />
    <div className="m-0 p-0 flex flex-row justify-between items-baseline ">
      <App_Row />
      <App_Aside />
    </div>
    <App_Footer />
  </React.StrictMode>
);