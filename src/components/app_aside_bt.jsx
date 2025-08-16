import App_Aside_Tp from "./app_aside_tp";
import "../styles/app.css";
let img_one = "https://www.pelisplushd.ms/poster/blue-beetle.jpg";
let img_two = "https://image.tmdb.org/t/p/w200/83sGKvCv2T2CulYbd40Aeduc7n2.jpg";
let img_three = "https://www.pelisplushd.ms/poster/indiana-jones-y-el-dial-del-destino.jpg";
let img_four = "https://image.tmdb.org/t/p/w200/peIB7KBBrqW0JsCLQBt9ChEtZ7m.jpg";
let img_five = "https://hackstore2.com/wp-content/uploads/thumbs/c02cd78b36a40396482ff62024b91848_hd.webp";
let img_six = "https://www.pelisplushd.ms/poster/rapidos-y-furiosos-x.jpg";
let img_seven = "https://hackstore2.com/wp-content/uploads/thumbs/52012d28d631ee433533c0bb4260b475_hd.webp";
let img_eight = "https://www.bajarpelisgratis.com/wp-content/uploads/2023/07/Flash-2023-228x331.jpg";
let img_nine = "https://www.bajarpelisgratis.com/wp-content/uploads/2023/08/Megalodon-2-228x331.jpg";
let img_teen = "https://www.bajarpelisgratis.com/wp-content/uploads/2023/10/Saw-X-228x331.jpg";
let link_zero = "https://reactjs.dev";

function App_Aside_Bt() {
  return (
    <>
      <div
        id="app_row"
        className="m-1 p-1 bg-[#232136] flex flex-[80%] flex-col justify-start items-baseline rounded-lg"
      >
        <p className="m-1.5 p-1.5 text-balance font-500 flex flex-row flex-start text-[#d7dae0] rounded-lg">
          Portal web desarrollado para explorar y descubrir contenido
          cinematográfico. Nuestro sistema presenta una interfaz moderna con
          funcionalidades de búsqueda avanzada, filtros por género y año,
          navegación intuitiva y reproductor integrado. El proyecto demuestra
          habilidades en desarrollo frontend, integración de APIs y diseño de
          experiencia de usuario. Una plataforma que muestra las capacidades
          técnicas en la creación de aplicaciones web interactivas.
        </p>
        <div>
          <div
            id="app_div_row_"
            className="m-2.5 mr-20 ml-20 flex flex-row justify-between items-center"
          >
            <h3
              id="app_div_row"
              className="m-1.5 p-1.5 font-500 flex flex-row flex-start bg-[#2a273f] text-[#f6c177] rounded-lg cursor-pointer"
            >
              Generos
            </h3>
            <span
              id="app_div_row"
              className="m-1.5 p-1.5 font-500 flex flex-row flex-end bg-[#2a273f] text-[#eb6f92] rounded-lg cursor-pointer"
            >
              Ver Todos
            </span>
          </div>
          <ul className="m-1 p-1 flex flex-row justify-center items-center flex-wrap">
            <a href={link_zero}>
              <img
                src={img_one}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_one"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_two}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_two"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_three}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_three"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_four}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_four"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_five}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_five"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_six}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_six"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_seven}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_seven"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_eight}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_eight"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_nine}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_nine"
                width={160}
              />
            </a>
            <a href={link_zero}>
              <img
                src={img_teen}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_teen"
                width={160}
              />
            </a>
            <App_Aside_Tp />
          </ul>
        </div>
      </div>
    </>
  );
}

export default App_Aside_Bt;
