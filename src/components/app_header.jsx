import react from "../assets/icon.svg";
import App_Nav from "./app_nav";
import "../styles/app.css";

function App_Header() {
  return (
    <>
      <div className="m-5 p-5 flex flex-col flex-[50%] justify-center items-center">
        <div className="m-5 p-5 flex flex-row justify-start items-center">
          <h1 id="app_header_h1" className="m-2.5 p-2.5">
            Pages-Movies
          </h1>
          <a href="https://reactjs.dev">
            <img
              src={react}
              className="m-1.5 p-1.5 flex-row"
              alt="React-Logo"
              width={60}
            />
          </a>
        </div>
        <App_Nav />
      </div>
    </>
  );
}

export default App_Header;
