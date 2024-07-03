import "../styles/app.css";

function App_Row() {
  return (
    <>
      <div
        className="m-1 p-1 bg-[#383737] text-[#d7dae0] flex flex-[20%] justify-center items-center rounded-lg">
        <div className="m-0 p-0 flex flex-col justify-center items-center ">
          <h2 className="m-1 p-1 flex flex-row justify-center items-center font-bold ">
            Estrenos
          </h2>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/los-asesinos-de-la-luna-1697887814.png" id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo" width={150}
              />
            </a>
          </ul>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/tortugas-ninja-caos-mutante-1691747366.png" id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo" width={150}
              />
            </a>
          </ul>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/barbie-1690257194.png" id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo" width={150}
              />
            </a>
          </ul>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/oppenheimer-1690257013.png" id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo" width={155}
              />
            </a>
          </ul>
          <ul>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/red-social.jpg" id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#5e5a5a] "
                alt="React-Logo" width={155}
              />
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App_Row;
