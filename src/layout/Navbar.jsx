import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <Link to="/home" >
        <img src="https://tse1.mm.bing.net/th?id=OIP.srwhrq0ikhWXYQyiAinsRQAAAA&pid=Api&P=0" alt="" />
      </Link>
      <Link to="/statistics" >
        <img src="https://tse1.mm.bing.net/th?id=OIP.srwhrq0ikhWXYQyiAinsRQAAAA&pid=Api&P=0" alt="" />
      </Link>
      <Link to="/profile" >
        <img src="https://tse1.mm.bing.net/th?id=OIP.srwhrq0ikhWXYQyiAinsRQAAAA&pid=Api&P=0" alt="" />
      </Link>
    </div>
  );
};

export default Navbar;
