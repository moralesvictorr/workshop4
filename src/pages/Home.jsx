import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-800 flex flex-col h-screen w-screen gap-2">
      <h1 className="text-white flex justify-center pt-5 font-anton text-xl ">
        Practica tus conocimientos en la categoria que prefieras.
      </h1>
      <div className="mx-auto w-full flex justify-center">
        <Link to="/HTML">
          <img
            className="w-20 border-8 hover:border-green-500 border-white rounded-full  "
            src="./icono-html.svg"
            width=""
            alt=""
          />
        </Link>
      </div>
      <div className="flex justify-center mx-auto gap-5 w-full">
        <Link to="/CSS">
          <img
            className="border-8  hover:border-green-500 border-white rounded-full w-20"
            src="./icono-css.svg"
            width=""
            alt=""
          />
        </Link>
        <Link to="/JS">
          <img
            className="w-20 border-8  hover:border-green-500 border-white rounded-full"
            src="./icono-js.svg"
            width=""
            alt=""
          />
        </Link>
      </div>
      <div className="flex justify-center mx-auto gap-5 w-full">
      <Link to="/FIGMA">
          <img
            className="w-20 border-8  hover:border-green-500 border-white rounded-full "
            src="./icono-figma.svg"
            width=""
            alt=""
          />
        </Link>
        <Link to="/UX">
          <img
            className="w-20 border-8  hover:border-green-500 border-white rounded-full "
            src="./icono-ux.svg"
            width=""
            alt=""
          />
        </Link>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
