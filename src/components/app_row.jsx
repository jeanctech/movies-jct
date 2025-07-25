import "../styles/app.css";
let img_one = "https://hackstore2.com/wp-content/uploads/thumbs/b6fc41016425769c19f9908c3d47ebe9_hd.webp";
let img_two = "https://hackstore2.com/wp-content/uploads/thumbs/fb4f6a73afbcbc0872b41bdbcd5a84a0_hd.webp";
let img_three = "https://www.pelisplushd.ms/poster/barbie.jpg";
let img_four = "https://www.pelisplushd.ms/poster/oppenheimer.jpg";
let img_five = "https://www.pelisplushd.ms/poster/la-red-social.jpg";
let link_zero = "https://reactjs.dev";

function App_Row() {
  return (
    <>
      <div
        id="app_row"
        className="m-1 p-1 bg-[#232136] text-[#fffaf3] flex flex-[20%] justify-center items-center rounded-lg"
      >
        <div className="m-0 p-0 flex flex-col justify-center items-center ">
          <div
            id="app_div_row_"
            className="m-0 p-0 flex flex-col justify-center items-center "
          >
            <h2
              id="app_div_row"
              className="m-1.5 p-1.5 font-500 flex flex-row flex-start bg-[#2a273f] text-[#f6c177] cursor-pointer hover:text-[#a2cce7] font-bold"
            >
              Estrenos
            </h2>
          </div>
          <ul>
            <a href={link_zero}>
              <img
                src={img_one}
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#3b3838] "
                alt="img_one"
                width={155}
              />
            </a>
          </ul>
          <ul>
            <a href={link_zero}>
              <img
                src={img_two}
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#3b3838] "
                alt="img_two"
                width={155}
              />
            </a>
          </ul>
          <ul>
            <a href={link_zero}>
              <img
                src={img_three}
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#3b3838] "
                alt="img_three"
                width={155}
              />
            </a>
          </ul>
          <ul>
            <a href={link_zero}>
              <img
                src={img_four}
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#3b3838] "
                alt="img_four"
                width={155}
              />
            </a>
          </ul>
          <ul>
            <a href={link_zero}>
              <img
                src={img_five}
                id="img"
                className="m-1 p-1 rounded-xl border-y-2 border-x-2 border-[#3b3838] "
                alt="img_five"
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
