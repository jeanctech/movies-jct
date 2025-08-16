import React from "react";
import ReactDOM from "react-dom/client";
import App_Header from "./components/app_header";
import App_Row_Lf from "./components/app_row_lf";
import App_Aside_Bt from "./components/app_aside_bt";
import App_Footer from "./components/app_footer";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App_Header />
    <div id="root-container">
      <App_Row_Lf />
      <App_Aside_Bt />
    </div>
    <App_Footer />
  </React.StrictMode>
);
