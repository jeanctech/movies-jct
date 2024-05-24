import App_Aside1 from "./app_aside-1";
import "../styles/app.css";

function App_Aside() {
  return (
    <>
      <div
        className="m-1 p-1 bg-[#383737] text-[#f8f8f8] flex flex-[80%] flex-col justify-start items-baseline rounded-lg">
        <p className="m-1.5 p-1.5 text-balance">
          Pelisplus es un sitio ideal para ver películas y series online.
          Nuestro sistema se preocupa por tener lo último del cine en calidad
          full Hd. Para ver una película o serie de televisión puedes usar el
          buscador en la parte superior o seguir uno de los enlaces de genero o
          año de estreno en la parte izquierda del sitio, luego el enlace te
          llevará al reproductor donde solo tienes que dar click en el boton de
          play. Te invitamos a compartir este genial sitio con tus amigos y
          familiares.
        </p>
        <div>
          <div
            className="m-2.5 mr-20 ml-20 flex flex-row justify-between items-center">
            <h3
              className="m-1.5 p-1.5 font-500 flex flex-row flex-start bg-[#555252] text-[#d7dae0] rounded-lg">
              Vistas
            </h3>
            <span
              className="m-1.5 p-1.5 font-500 flex flex-row flex-end bg-[#535050] text-[#d7dae0] rounded-lg">
              Ver Todo
            </span>
          </div>
          <ul
            className="m-1 p-1 flex flex-row justify-center items-center flex-wrap">
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/blue-beetle-1692423798.png" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/mission-impossible-dead-reckoning-part-one-1689741889.png" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/indiana-jones-and-the-dial-of-destiny-1692519533.png" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/transformers-rise-of-the-beasts-2-1686267601.jpg" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/spider-man-across-the-spider-se-2-1685731801.jpg" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/fast-x-2-1684533003.jpg" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/guardians-of-the-galaxy-volume-3-2-1683243601.jpg" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/the-flash-2023-1691552507.png" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/megalodon-2-el-gran-abismo-1691205314.png" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <a href="https://reactjs.dev">
              <img
                src="https://pelisimg.online/cover/saw-x-1695976461.png" id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#5e5a5a]"
                alt="React-Logo" width={160}
              />
            </a>
            <App_Aside1 />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App_Aside;