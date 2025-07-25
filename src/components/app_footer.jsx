// import { useState } from "react";
import "../styles/app.css";
import Logotipo from "/logotipo.webp";

function App_Footer() {
  return (
    <>
      <footer className="m-1 p-1 bg-[#232136] text-[#fffaf3] flex flex-[80%] flex-row justify-items-start items-center rounded-lg">
        <div className="m-1 p-1 flex flex-[80%] flex-row justify-items-start items-center rounded-lg">
          <br />
          <span className="m-1 p-1 text-[17px] inline flex-row justify-baseline items-left">
            <strong>©2024</strong> -{" "}
            <small>
              <strong>JeanCarlos Jimenez</strong>
            </small>{" "}
            - <small>@jeanctech</small> -{" "}
            <strong>Todos los derechos reservados.</strong>
          </span>
        </div>
        <div>
          <img
            id="app_row"
            src={Logotipo}
            alt="Logotipo-Jc"
            width={56}
            className="m-0.3 p-0.3 rounded-lg"
          />
        </div>
      </footer>
    </>
  );
}

export default App_Footer;
