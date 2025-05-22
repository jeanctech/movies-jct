import "../styles/app.css";

function App_Nav() {
  return (
    <>
      <div className="m-0.5 p-0.5 flex flex-col flex-[50%] justify-between items-center">
        <ul id="app_nav_ul" className="m-1 p-1 flex flex-row justify-center items-center bg-[#2b2727] text-slate-300 rounded-lg">
          <li className="m-1 p-1 cursor-pointer hover:text-[#a2cce7] font-bold">
            Inicio
          </li>{" "}
          <span className="m-1 text-[#494848]"><p className="m-0.5 p-0.5 text-slate-700">/</p></span>
          <li className="m-1 p-1 cursor-pointer hover:text-[#a2cce7] font-bold">
            Series
          </li>{" "}
          <span className="m-1 text-[#494848]"><p className="m-0.5 p-0.5 text-slate-700">/</p></span>
          <li className="m-1 p-1 cursor-pointer hover:text-[#a2cce7] font-bold">
            En Estreno
          </li>{" "}
          <span className="m-1 text-[#494848]"><p className="m-0.5 p-0.5 text-slate-700">/</p></span>
          <li className="m-1 p-1 cursor-pointer hover:text-[#a2cce7] font-bold">
            Películas
          </li>{" "}
          <span className="m-1 text-[#494848]"><p className="m-0.5 p-0.5 text-slate-700">/</p></span>
          <li className="m-1 p-1 cursor-pointer hover:text-[#a2cce7] font-bold">
            Acerca
          </li>
        </ul>
        <label id="app_nav_label" className="m-1.5 p-1.5 flex flex-row justify-center items-center  bg-[#2b2727]  text-slate-300 rounded-lg">
          <input
            id="app_nav_search"
            type="search"
            placeholder="Escribe Aqui"
            className="m-1.5 p-1.5 bg-[#333232] rounded-lg font-bold"
          ></input>
          <button
            type="button"
            id="app_nav_button"
            className="m-1.5 p-1.5 bg-[#333232] rounded-lg font-bold"
          >
            Buscar
          </button>
        </label>
      </div>
    </>
  );
}

export default App_Nav;
