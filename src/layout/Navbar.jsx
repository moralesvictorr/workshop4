import React from "react";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";

const Navbar = () => {
  return (
    <div className=" bg-slate-800 ">
      <div className=" bg-cyan-900 flex justify-around ">
       
        <Link to="/home" >
          <img src="./icono-home.svg" width="40px" alt="icono-home" />
          <span className="text-white text-sm font-anton hover:text-green-500">
            HOME
          </span>
        </Link>


        <Link to="/statistics" >
          <img
            src="./icono-statistics.svg"
            width="40px"
            alt="icono-statistics"
          />
          <span className="text-white text-sm font-anton hover:text-green-500">
            STATISTICS
          </span>
        </Link>


        <Link to="/profile">
          <img src="./icono-profile.svg" width="40px" alt="icono-profile" />
          <span className="text-white text-sm font-anton hover:text-green-500">
            PROFILE
          </span>
        </Link>



      </div>
    </div>
  );
};

export default Navbar;
