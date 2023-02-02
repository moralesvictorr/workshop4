import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue ">
      <div className="bg-blue">
        <Login />
        <h1>Practica tus conocimientos en la categoría que prefieras.</h1>

        <div>
          <button onClick={() => navigate("/HTML") }>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
              width="70px"
              alt=""
            />
          </button>
          {/* <Link to="/questionary">
      <img src="https://as2.ftcdn.net/v2/jpg/01/37/41/95/1000_F_137419573_AbQ3d7R3zkzByqAe0fRHgXw8brJQvOMv.jpg" width="70px" alt="" />
    </Link> */}
        </div>

        <div>
          <Link to="/CSS">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              width="70px"
              alt=""
            />
          </Link>
        </div>

        <div>
          <Link to="/JS">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              width="70px"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/FIGMA">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              width="70px"
              alt=""
            />
          </Link>
        </div>
        <div>
          <Link to="/UX">
            <img
              src="https://cdn.hackr.io/uploads/topics_svg/152109895592bCOLJWwr.svg"
              width="70px"
              alt=""
            />
          </Link>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
