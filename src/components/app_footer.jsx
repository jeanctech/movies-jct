// import { useState } from "react";
import "../styles/app.css";
import Logotipo from "/logotipo.svg";

function App_Footer() {
  return (
        <>
          <footer id="app_row" className="m-1 p-1 bg-[#2b2727] text-[#f8f8f8] flex flex-[80%] flex-row justify-between items-center rounded-lg">
            <br />
            <span className="m-1 p-1 text-[17px] inline flex-row justify-between items-center">
              <strong>©2024</strong> -{" "}
              <small>
                <strong>JeanCarlos Jimenez</strong>
              </small>{" "}
              - <small>@jeanctech</small> -{" "}
              <strong>Todos los derechos reservados.</strong>
            </span>
            <img id="app_row" src={Logotipo} alt="Logotipo-Jc" width={55} className="m-0.3 p-0.3 rounded-lg"/>
          </footer>
        </>
  );
}

export default App_Footer;
