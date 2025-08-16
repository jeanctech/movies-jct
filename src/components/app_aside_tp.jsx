import "../styles/app.css";
let img_one = "https://www.pelisplushd.ms/poster/el-juego-bonito.jpg";
let img_two = "https://hackstore2.com/wp-content/uploads/thumbs/52d8c81df32a62a5cce41414e8454fa2_hd.webp";
let img_three = "https://www.pelisplushd.ms/poster/ghostbusters-apocalipsis-fantasma.jpg";
let img_four = "https://upload.wikimedia.org/wikipedia/en/7/71/Ride_On_2023.png";
let img_five = "https://www.pelisplushd.ms/poster/super-mario-bros-la-pelicula.jpg";
let img_six = "https://www.pelisplushd.ms/poster/gato-con-botas-el-ultimo-deseo.jpg";
let img_seven = "https://hackstore2.com/wp-content/uploads/thumbs/56ad42f78c97da3a31dd5afb2ba93cfa_hd.webp";
let img_eight = "https://www.pelisplushd.ms/poster/madame-web.jpg";
let img_nine = "https://www.pelisplushd.ms/poster/bob-marley-la-leyenda.jpg";
let img_teen = "https://hackstore2.com/wp-content/uploads/thumbs/fabb833a55c9b4e679572148b7806780_hd.webp";
let links = "https://reactjs.dev";

function App_Aside_Tp() {
  return (
    <>
      <div className="m-1 p-1 bg-[#232136] flex flex-[80%] flex-col justify-start items-baseline rounded-lg">
        <div className="m-1 p-1 flex flex-col justify-start items-center">
          <ul className="m-1 p-1 flex flex-row justify-center items-center flex-wrap">
            <a href={links}>
              <img
                src={img_one}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_one"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_two}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_two"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_three}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_three"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_four}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_four"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_five}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_five"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_six}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_six"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_seven}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_seven"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_eight}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_eight"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_nine}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_nine"
                width={160}
              />
            </a>
            <a href={links}>
              <img
                src={img_teen}
                id="img"
                className="m-1 p-1 flex-row flex-wrap rounded-xl border-y-2 border-x-2 border-[#3b3838]"
                alt="img_teen"
                width={160}
              />
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App_Aside_Tp;
