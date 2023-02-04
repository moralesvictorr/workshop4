import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
//import Login from "./Login";

const Home = () => {
  return (
    <div className="bg-slate-800 ">
      <h1 className="text-white flex justify-center pt-5 font-anton text-xl ">
        Practica tus conocimientos en la categoria que prefieras.
      </h1>
      <div className=" flex gap-7 flex-col">
        <div className="flex justify-center pt-5">
          <Link to="/questionHTML">
            <img
              className=" border-8 hover:border-green-500 border-white rounded-full  "
              src="./icono-html.svg"
              width="110px"
              alt=""
            />
          </Link>
        </div>

        <div className=" flex justify-center space-x-7">
          <Link to="/questionCSS">
            <img
              className="border-8  hover:border-green-500 border-white rounded-full "
              src="./icono-css.svg"
              width="110px"
              alt=""
            />
          </Link>
          <Link to="/questionJS">
            <img
              className="  border-8  hover:border-green-500 border-white rounded-full"
              src="./icono-js.svg"
              width="110px"
              alt=""
            />
          </Link>
        </div>

        <div className=" flex justify-center space-x-11">
          <Link to="/questionFIGMA">
            <img
              className=" border-8  hover:border-green-500 border-white rounded-full "
              src="./icono-figma.svg"
              width="110px"
              alt=""
            />
          </Link>
          <Link to="/questionUX">
            <img
              className=" border-8  hover:border-green-500 border-white rounded-full "
              src="./icono-ux.svg"
              width="110px"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="bg-slate-800 pt-7">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
