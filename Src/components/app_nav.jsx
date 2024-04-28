import "../styles/app.css";

function App_Nav() {
  return (
    <>
      <div
      className="m-0.5 p-0.5 flex flex-col flex-[50%] justify-between items-center">
        <ul
        className="m-1 p-1 flex flex-row justify-center items-center bg-[#2b2727] text-slate-300 rounded-lg">
          <li className="m-1 p-1 cursor-pointer hover:bg-[#423f3f] rounded-lg">
            Inicio
          </li>{" "}
          <span className="text-[#494848]">|</span>
          <li className="m-1 p-1 cursor-pointer hover:bg-[#423f3f] rounded-lg">
            Series
          </li>{" "}
          <span className="text-[#494848]">|</span>
          <li className="m-1 p-1 cursor-pointer hover:bg-[#423f3f]  rounded-lg">
            En Estreno
          </li>{" "}
          <span className="text-[#494848]">|</span>
          <li className="m-1 p-1 cursor-pointer hover:bg-[#423f3f]  rounded-lg">
            Películas
          </li>{" "}
          <span className="text-[#494848]">|</span>
          <li className="m-1 p-1 cursor-pointer hover:bg-[#423f3f]  rounded-lg">
            Acerca
          </li>
        </ul>
        <label
        className="m-1.5 p-1.5 flex flex-row justify-center items-center bg-[#242121] text-slate-300 rounded-lg border-0">
          <input
            id="app_nav_search" type="search"
            placeholder="Escribe Aqui"
            className="m-1 p-1 bg-[#2e2b2b] rounded-lg" >
          </input>
          <button
            type="button" id="app_nav_button"
            className="m-1 p-1 bg-[#2e2b2b] rounded-lg" >
            Buscar
          </button>
        </label>
      </div>
    </>
  );
}

export default App_Nav;