// import { useState } from "react";
import "../styles/app.css";
import Logotipo from "/logotipo.webp";

function App_Footer() {
  return (
    <>
      <footer className="m-1 p-1 bg-[#232136] text-[#fffaf3] flex flex-row rounded-lg">
        <div className="m-1 p-1 flex flex-[50%] flex-row justify-items-start items-center rounded-lg">
          <br />
          <span className="m-1 p-1 text-[15px]">
            <span> Creado con &#10084;&#65039; por un Dev</span>
            <span className="m-1">-</span>
            <small>JeanCarlos Jimenez</small>
            <span className="m-1">-</span>
            <small>@jeanctech</small>
            <span className="m-1">-</span>
            <strong>©2024</strong>
          </span>
        </div>
        <div>
          <img
            id="app_row"
            src={Logotipo}
            alt="Logotipo-Jc"
            width={56}
            className="m-0.4 p-0.4 rounded-lg"
          />
        </div>
      </footer>
    </>
  );
}

export default App_Footer;
