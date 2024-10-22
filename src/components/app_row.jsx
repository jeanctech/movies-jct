import Pages1 from "./pages/pages-1";
import "../styles/app.css";

function App_Row() {
  return (
    <>
      <div className="m-1 p-1 bg-[#2e2d2d] text-[#d7dae0] flex flex-[20%] justify-center items-center rounded-lg">
        <div className="m-0 p-0 flex flex-col justify-center items-center ">
          <h2 className="m-1.5 p-1.5 font-500 flex flex-row flex-end bg-[#3b3a3a] text-[#d7dae0] rounded-lg cursor-pointer hover:text-[#a2cce7]">
            Estrenos
          </h2>
          <ul>
            <a href={Pages1} target="_blank" rel="noopener noreferrer"></a>
            <a href={Pages1}>
              <img
                src="https://pelisimg.online/cover/los-asesinos-de-la-luna-1697887814.png"
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo"
                width={150}
              />
            </a>
          </ul>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/tortugas-ninja-caos-mutante-1691747366.png"
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo"
                width={150}
              />
            </a>
          </ul>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/barbie-1690257194.png"
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo"
                width={150}
              />
            </a>
          </ul>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/oppenheimer-1690257013.png"
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo"
                width={155}
              />
            </a>
          </ul>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/red-social.jpg"
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo"
                width={155}
              />
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App_Row;
