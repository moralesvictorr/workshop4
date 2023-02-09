import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartSimple,faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className=" bg-slate-800  fixed bottom-0 w-screen text-center">
      <div className=" bg-cyan-900 flex justify-around items-center p-1">
        <Link to="/home" className="flex flex-col justify-center items-center text-sm font-anton text-white hover:text-green-500 ">
          <FontAwesomeIcon  icon={faHome} size="2x" color="inherit" />
            H O M E
        </Link>

        <Link to="/statistics" className="
        flex
        flex-col 
        justify-center 
        items-center
        text-white 
        text-sm 
        font-anton 
        hover:text-green-500
        " >
          <FontAwesomeIcon  icon={faChartSimple} size="2x" color="inherit" />
          S T A T I S T I C S
        </Link>


        <Link to="/profile" className="
        flex 
        flex-col 
        justify-center 
        items-center 
        text-white 
        text-sm 
        font-anton 
        hover:text-green-500">
        <FontAwesomeIcon  icon={faUser} size="2x"/>
            P E R F I L
        </Link>



      </div>
    </div>
  );
};

export default Navbar;
